// SSOTの窓口
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const supabase = createRouteHandlerClient({ cookies })

    // Supabaseのセッション取得
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    if (sessionError) throw new Error(`Session fetch error: ${sessionError.message}`)

    const session = sessionData.session
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } }
      )
    }

    // アプリDBのユーザー情報を取得
    const { data: usersProfile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (profileError) throw new Error(`Profile fetch error: ${profileError.message}`)
    
    return NextResponse.json(
      { user: { ...session.user, usersProfile } },
      { status: 200, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } }
    )

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get session' },
      { status: 500, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } }
    )
  }
}
