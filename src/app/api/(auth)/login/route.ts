import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/app/_utils/supabase/server'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    const errorStatus = error.status
    if (errorStatus === 400) {
      return NextResponse.json(
        { error: 'メールアドレスまたはパスワードが間違っています' },
        { status: 400 },
      )
    } else if (errorStatus === 500) {
      return NextResponse.json(
        { error: '通信に失敗しました。もう一度お試しください' },
        { status: 500 },
      )
    }
  }

  return NextResponse.json({ message: 'ログインに成功しました' }, { status: 200 })
}
