import { NextRequest, NextResponse } from 'next/server'

import { learningRecordSchema } from '@/app/(learning)/learning-record/_utils/learningRecordSchema'
import { prisma } from '@/app/_lib/prisma' // ← Prismaクライアントのインスタンス


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // バリデーション（zod）
    const parsed = learningRecordSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'バリデーションエラー', errors: parsed.error },
        { status: 400 }
      )
    }

    const {
      userId,
      categoryId,
      title,
      content,
      startTime,
      endTime,
      duration,
      learningDate,
    } = body

    const learningRecord = await prisma.learningRecord.create({
      data: {
        userId,
        categoryId,
        title,
        content,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        duration,
        learningDate: new Date(learningDate),
      },
    })

    return NextResponse.json(
      { message: '学習記録が作成されました', record: learningRecord },
      { status: 201 }
    )
  } catch (error) {
    console.error('学習記録の作成中にエラー:', error)
    return NextResponse.json(
      { message: 'サーバーエラー', error },
      { status: 500 }
    )
  }
}

