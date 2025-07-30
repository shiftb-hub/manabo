import { prisma } from '@/app/_lib/prisma'

export async function POST(request: Request) {
  try {
    // ✅ リクエストボディを取得してJSONとしてパース
    const { nickname, supabaseUserId } = await request.json()

    // ✅ 必須項目が不足している場合は400 Bad Requestを返す
    if (!nickname || !supabaseUserId) {
      return new Response(
        JSON.stringify({
          message: 'nickname または supabaseUserId が不足しています',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // ✅ トランザクションでアプリユーザーの登録処理を実行
    const result = await prisma.$transaction(async (tx) => {
      // すでに supabaseUserId に対応するユーザーが存在するか確認
      const existingUser = await tx.user.findUnique({
        where: { supabaseUserId },
      })

      if (existingUser) {
        // 既存ユーザーがいた場合はエラーを投げてロールバック
        throw new Error('ユーザーはすでに存在します。')
      }

      // 新規ユーザーを作成（初期ロールIDは 1 として設定）
      const newUser = await tx.user.create({
        data: {
          supabaseUserId,
          nickName: nickname, // ← 変数: nickname を正しく nickName プロパティにマッピング
          roleId: 1,
        },
      })

      return newUser
    })

    // ✅ 作成成功時にレスポンスを返す
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    // ❌ エラー処理：既存ユーザー、DBエラー、パース失敗など
    console.error('❌ ユーザー登録に失敗しました:', error)

    const message =
      error instanceof Error && error.message === 'ユーザーはすでに存在します。'
        ? error.message
        : 'ユーザー情報の保存に失敗しました'

    return new Response(JSON.stringify({ message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
