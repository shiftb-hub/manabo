import { NextRequest, NextResponse } from 'next/server' 

import { CompatibleUser } from '@/app/(learning-style)/_types/compatibleUser'
import { LearningStyleLists } from '@/app/(learning-style)/_types/learningStyleLists'
import { LearningStyleRequest } from '@/app/(learning-style)/_types/learningStyleRequest' 
import { StyleType } from '@/app/(learning-style)/_types/learningType'
import { prisma } from '@/app/_lib/prisma' 
import { getAuthUser } from '@/app/_utils/api/requireUser' 

// 相性のよいTypeをマッピングするリスト
const compatibleMap: Record<string, string[]> = {
  forest: ['bamboo'],               // forestはbambooと相性◎
  meadow: ['bamboo'],               // meadowはbambooと相性◎
  bamboo: ['forest', 'meadow'],     // bambooはforest、meadowと相性◎
}

// DB保存している学習スタイルリストの取得 + 相性のよいユーザー抽出を行うAPI
export const GET = async() => {
  try {
    const fetchLearningList = await prisma.learningStyle.findMany({
      orderBy: {
        id: 'asc'
      },
      select: {
        id: true,
        type: true,
        name: true,
        icon: true,
        description: true,
        characteristics: true,
        recommendations: true,
      }
    })

    // 取得したデータをstring→styleType型に変換する
    const learningStyleLists: LearningStyleLists[] = fetchLearningList.map((style) => ({
      ...style,
      type: style.type as StyleType,
    }));

    // データベースから各typeと相性がいいユーザーを取得。
    const compatibleUsersMap: Record<string, CompatibleUser[]> = {}

    for (const [type, targetTypes] of Object.entries(compatibleMap)) {
      const users = await prisma.user.findMany({
        where: {
          userLearningStyle: {
            learningStyle: { type: { in: targetTypes} },
          },
        },
        select: {
          id: true,
          nickName: true,
          userLearningStyle: {
            select: {
              learningStyle: {
                select: {
                  type: true,
                  name: true,
                  icon: true,
                }
              },
            },
          },
          profile: {
            select: {
              profilePicture: true,
            }
          }
        },
      })
      
      // 各タイプごとに相性の良いユーザーをランダムで3人取得
      const shuffled = users.sort(() => 0.5 - Math.random())
      compatibleUsersMap[type] = shuffled.slice(0, 3) as CompatibleUser[]
    }

    return NextResponse.json({learningStyleLists, compatibleUsersMap}, { status: 200})
  } catch(e) {
    if (e instanceof Error) { 
      return NextResponse.json({ message: e.message }, { status: 400 })
    } 
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}

// 学習スタイル診断結果を保存するためのAPI
export const POST = async(req: NextRequest) => { 
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
    } 
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  } 
}