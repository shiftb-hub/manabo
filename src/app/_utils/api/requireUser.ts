import type { AppUser } from '@/app/_types/user'
import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

type RequireUserResult =
  | { user: AppUser; errorResponse: null }
  | { user: null; errorResponse: Response }

export async function requireUser(): Promise<RequireUserResult> {
  const user = await getCurrentUser()
  if (!user) {
    return {
      user: null,
      errorResponse: new Response(JSON.stringify({ status: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }),
    }
  }
  return { user, errorResponse: null }
}
