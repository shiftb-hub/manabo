import { prisma } from '@/app/_lib/prisma'
import { createClient } from '@/app/_utils/supabase/server'

export const getCurrentUser = async () => {
  const supabase = await createClient()

  const { data, error: authError } = await supabase.auth.getUser()

  if (authError || !data) {
    throw new Error('認証が必要です')
  }

  const user = await prisma.user.findUnique({
    where: { supabaseUserId: data.user.id },
  })

  if (!user) {
    throw new Error('ユーザーが見つかりません')
  }

  return user
}
