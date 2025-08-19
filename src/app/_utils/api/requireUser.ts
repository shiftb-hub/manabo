import { NextResponse } from 'next/server'

import type { AppUser } from '@/app/_types/user'
import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

/**
 * ✅ 推奨：認証中なら AppUser、未認証なら null を返すだけ。
 * 401/200 のレスポンスは各 API ルート側で決める（責務分離）。
 */
export async function getAuthUser(): Promise<AppUser | null> {
  return getCurrentUser()
}

/**
 * ⚠️ 互換用：過去の呼び出しを壊さないためのラッパー。
 * 既存コードの `const guard = await requireUser(); if (!guard.ok) return guard.response`
 * という使い方を満たします。ゆくゆく削除予定（deprecated）。
 */
export async function requireUser(): Promise<
  { ok: true; user: AppUser } | { ok: false; response: ReturnType<typeof NextResponse.json> }
> {
  const user = await getAuthUser()
  if (!user) {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Unauthorized' }, { status: 401 }),
    }
  }
  return { ok: true, user }
}
