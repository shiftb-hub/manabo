import { TZDate } from '@date-fns/tz'
import { endOfDay, startOfDay } from 'date-fns'
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

  // 現在の日付を算出
  const jstNow = new TZDate(new Date(), 'Asia/Tokyo')

  // 今日の日付から、開始時間(JST)と終了時間(JST)を変数化
  const jstStart = startOfDay(jstNow)
  const jstEnd = endOfDay(jstNow)

  // utc時間に変更
  const utcStart = new Date(jstStart)
  const utcEnd = new Date(jstEnd)

  try {
    const todayStudyRecords:TodayStudyRecord[] = await prisma.learningRecord.findMany({
      where : {
        userId: targetUser.id,
        startTime: {
          gte: utcStart,
          lt: utcEnd,
        },
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