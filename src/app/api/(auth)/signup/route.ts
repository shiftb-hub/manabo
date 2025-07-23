import { createClient } from '@supabase/supabase-js'

import { prisma } from '@/app/_lib/prisma'

export async function POST(request: Request) {
  try {
    const { email, password, nickname } = await request.json()

    if (!email || !password || !nickname) {
      return new Response(
        JSON.stringify({ message: '必要な情報が不足しています' }),
        {
          status: 400,
        }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // ✅ Supabaseでユーザー登録
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    })

    if (error || !data.user) {
      console.error('❌ Supabase登録エラー:', error)
      return new Response(
        JSON.stringify({ message: error?.message ?? '登録に失敗しました' }),
        {
          status: 500,
        }
      )
    }

    const supabaseUserId = data.user.id

    // ✅ ユーザー情報をアプリ側のDBに保存
    const newUser = await prisma.user.create({
      data: {
        supabaseUserId,
        nickName: nickname,
        roleId: 1, // 初期ロール（例: 一般ユーザー）
      },
    })

    return new Response(JSON.stringify({ user: newUser }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('❌ エラー:', error)
    return new Response(
      JSON.stringify({ message: 'サインアップ処理に失敗しました' }),
      {
        status: 500,
      }
    )
  }
}
