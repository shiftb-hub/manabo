import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
  // middlewareで返却するResponseを初期化
  let supabaseResponse = NextResponse.next({
    request,
  })

  // Supabaseクライアントを作成。
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll() // リクエストから現在のCookie一覧を取得
        },
        setAll(cookiesToSet) { // supabaseが新規のCookieを発行した際の処理。レスポンスに更新したCookieをセット。
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Cookieをもとに最新のユーザー情報を取得
  await supabase.auth.getUser()  

  return supabaseResponse
}