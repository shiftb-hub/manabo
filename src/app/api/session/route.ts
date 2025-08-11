//SSOTの窓口
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const supabase = createRouteHandlerClient({ cookies })

  // Supabaseのセッション取得
  const { data } = await supabase.auth.getSession()
  const session = data.session
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 ,headers:{'Cache-Control': 'no-store', Vary: 'Cookie' ,}},)
  }

  // アプリDBのユーザー情報を取得（例）
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  return NextResponse.json({user:{...session.user,profile}},{status: 200, headers: {'Cache-Control': 'no-store', Vary: 'Cookie' ,}})
}
