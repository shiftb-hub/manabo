import { NextResponse } from 'next/server'

import { StudyTimeResponse } from '@/app/(dashboard)/dashboard/_types/todayStudyTime'
import { prisma } from '@/app/_lib/prisma'
import { createClient } from '@/app/_utils/supabase/server'

type TodayStudyRecord = {
  duration: number
}

export const GET = async () => {
  const supabase = await createClient()

  const { 
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user ) return NextResponse.json({ status: 'Unauthorized' }, { status: 401 })
  
  const targetUser = await prisma.user.findUnique({
    where: {
      supabaseUserId: user.id
    }
  })

  if (!targetUser) return NextResponse.json({ status: 'User not found' }, { status: 404 })

  // 今日の日本時間の取得
  const today = new Date()
  const jstYear = today.getFullYear()
  const jstMonth = today.getMonth()
  const jstDate = today.getDate()

  // UTC時間(00:00:00)に変換
  const targetDate = new Date(Date.UTC(jstYear, jstMonth, jstDate, 0, 0, 0))

  try {
    const todayStudyRecords:TodayStudyRecord[] = await prisma.learningRecord.findMany({
      where: {
        userId: targetUser.id,
        learningDate: targetDate
      },
      select: {
        duration: true,
      }
    })

    // 合計値の計算
    const totalStudyTime = todayStudyRecords.reduce((sum, record) => sum + (record.duration ?? 0), 0)

    // 時間に変換
    const totalStudyHours = Number((totalStudyTime / 60).toFixed(2))
    const responseBody: StudyTimeResponse = { totalStudyHours } 
      
    return NextResponse.json(responseBody, { status: 200 })
  } catch(error) {
    if (error instanceof Error) 
      return NextResponse.json({ status: error.message }, { status: 400 })
  }
}