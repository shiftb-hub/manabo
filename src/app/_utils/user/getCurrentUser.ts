import { prisma } from '@/app/_lib/prisma'
import type { AppUser } from '@/app/_types/user'
import { createClient } from '@/app/_utils/supabase/server'

export async function getCurrentUser(): Promise<AppUser | null> {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  if (!data?.user) return null

  const u = await prisma.user.findUnique({
    where: { supabaseUserId: data.user.id },
    select: {
      id: true,
      nickName: true,
      roleId: true,
      profile: { select: { profilePicture: true } },
    },
  })
  if (!u) return null

  return {
    id: u.id,
    nickName: u.nickName ?? null,
    roleId: u.roleId ?? null,
    avatarUrl: u.profile?.profilePicture ?? null,
  }
}
