import { NextResponse } from 'next/server'

import type { AppUser } from '@/app/_types/user'
import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

export type RequireUserResult = { ok: true; user: AppUser } | { ok: false; response: NextResponse }

export async function requireUser(): Promise<RequireUserResult> {
  const user = await getCurrentUser()
  if (!user) {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Unauthorized' }, { status: 401 }),
    }
  }
  return { ok: true, user }
}
