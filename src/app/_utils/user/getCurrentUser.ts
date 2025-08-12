import { prisma } from '@/app/_lib/prisma'
import type { AppUser } from '@/app/_types/user'
import { createClient } from '@/app/_utils/supabase/server'

/**
 * サーバ側でのみ実行（RSC/Route Handler）:
 * - SupabaseのセッションCookie(HttpOnly)からuserを特定
 * - Prismaで自アプリのUser/Profileを引く
 * - 画面で使う最小セット(AppUser)に射影
 */
export const getCurrentUser = async (): Promise<AppUser | null> => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) return null

  const u = await prisma.user.findUnique({
    where: { supabaseUserId: data.user.id },
    select: {
      id: true,
      nickName: true,
      roleId: true,
      profile: {
        select: {
          profilePicture: true,
        },
      },
    },
  })

  if (!u) return null

  return {
    id: u.id,
    nickName: u.nickName,
    roleId: u.roleId ?? undefined,
    avatarUrl: u.profile?.profilePicture ?? null,
  }
}
