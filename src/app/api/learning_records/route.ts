// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// import { learningRecordSchema } from '@/app/(learning)/learning-record/_utils/learningRecordSchema'
import { prisma } from '@/app/_lib/prisma' // ← Prismaクライアントのインスタンス
import { supabase } from '@/app/_lib/supabaseClient'
export async function POST(req: NextRequest) {
  // const cookieStore = cookies()
  // const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session || !session.user) {
      return NextResponse.json({ error: '認証されていません' }, { status: 401 })
    }

    const userId = session.user.id

    const body = await req.json()
    console.log('受け取ったbody:', body)
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
        userId: Number(userId),
        categoryId: categoryId,
        title: title,
        content: content,
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

