
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { createClient } from '@/app/_utils/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()// Supabaseクライアントを作成

  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: authError?.message || 'Unauthorized' },
        { status: 401 }
      )
    }

    const userRecord = await prisma.user.findUnique({
      where: { supabaseUserId: user.id },
    })

    if (!userRecord) {
      return NextResponse.json(
        { error: 'ユーザー情報が見つかりません' },
        { status: 404 }
      )
    }
    const body = await req.json()
    const {
      categoryId,
      title,
      content,
      startTime,
      endTime,
      duration,
      learningDate,
    } = body

    // Prismaを使ってデータベースに学習記録を作成
    await prisma.learningRecord.create({
      data: {
        userId: userRecord.id,
        categoryId,
        title,
        content,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        duration: duration,
        learningDate: new Date(learningDate),
      },
    })

    return NextResponse.json({ message: 'success' }, { status: 200 })
  } catch (error) {
    console.error('学習記録の作成中にエラーが発生しました:', error)
    return NextResponse.json(
      { error: 'サーバー内部でエラーが発生しました' },
      { status: 500 }
    )
  }
}
