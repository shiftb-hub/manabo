import { NextRequest, NextResponse } from 'next/server'

import { CreateLearningRecordRequestBody } from '@/app/(learning)/learning-record/_types/learningRecords'
import { learningRecordDbSchema } from '@/app/(learning)/learning-record/_utils/learningRecordSchema'
import { prisma } from '@/app/_lib/prisma'
import { createClient } from '@/app/_utils/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient() // Supabaseクライアントを作成

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
    const parseResult = learningRecordDbSchema.safeParse(body)

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.message
      return NextResponse.json(
        { error: 'バリデーションエラー', formattedErrors },
        { status: 400 }
      )
    }

    const {
      categoryId,
      title,
      content,
      startTime,
      endTime,
      duration,
      learningDate,
    } = parseResult.data as CreateLearningRecordRequestBody

    // Prismaを使ってデータベースに学習記録を作成
    await prisma.learningRecord.create({
      data: {
        userId: userRecord.id,
        categoryId,
        title,
        content,
        startTime,
        endTime,
        duration,
        learningDate,
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
