import type { AppUser } from '@/app/_types/user'
import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

/**
 * ログイン中なら AppUser、未ログインなら null を返す。
 * 401 レスポンスは各ルートで組み立てる（＝責務分離・明快）。
 */
export async function getAuthUser(): Promise<AppUser | null> {
  return getCurrentUser()
}
