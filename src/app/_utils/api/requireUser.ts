// src/app/_utils/api/requireUser.ts
import type { AppUser } from '@/app/_types/user'
import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

export type RequireUserResult = { ok: true; user: AppUser } | { ok: false; response: Response }

export async function requireUser(): Promise<RequireUserResult> {
  const user = await getCurrentUser()
  if (!user) {
    return {
      ok: false,
      response: new Response(JSON.stringify({ status: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }),
    }
  }
  return { ok: true, user }
}
