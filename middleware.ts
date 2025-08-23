import { type NextRequest } from 'next/server'

import { updateSession } from '@/app/_utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    // 特定の静的ファイルや画像をmiddlewareの対象外にする記述。
    // _next/static(ビルド時の静的ファイル)、_next/image(画像最適化用のAPI)、favicon.ico、各種画像/動画ファイルを除外
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
