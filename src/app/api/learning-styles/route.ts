import { NextRequest, NextResponse } from 'next/server' 

import { LearningStyleRequest } from '@/app/(learning-style)/_types/learningStyleRequest' 
import { prisma } from '@/app/_lib/prisma' 
import { getAuthUser } from '@/app/_utils/api/requireUser' 

export const POST = async (req: NextRequest) => { 
  try { const user = await getAuthUser() 
    if (!user) return NextResponse.json({ message: 'Unauthorized'}, { status: 401 }) 
      
      // 認証中のuserIdと診断結果のtype属性を取得する 
      const userId = user.id
      const { type }: LearningStyleRequest = await req.json()

      // learningStyleのテーブルから診断結果に合致するidを取得する 
      const learningStyle = await prisma.learningStyle.findUnique(
        { where: { type },
      }) 

      if (!learningStyle) return NextResponse.json(
        { message: '学習スタイルの取得ができませんでした。'},
        { status: 404 }
      ) 
      // user-learning-stylesテーブルにuserIdとstyleIdを保存。
      await prisma.userLearningStyle.upsert(
        { 
          where: { userId },
          update: { learningStyleId: learningStyle.id },
          create: { userId, learningStyleId: learningStyle.id, }, 
        }) 
        return NextResponse.json({ message: '診断結果を保存しました' }, { status: 200 }) 
  } catch(e) {
    if (e instanceof Error) { 
      return NextResponse.json({ message: e.message }, { status: 400 })
    } return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  } 
}