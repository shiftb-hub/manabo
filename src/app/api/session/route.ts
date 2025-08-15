// SSOTの窓口（Prisma版）
import { NextResponse } from 'next/server'

import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'

export const GET = async () => {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } },
      )
    }

    return NextResponse.json(user, {
      status: 200,
      headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' },
    })
  } catch (error) {
    console.error('Session API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get session' },
      { status: 500, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } },
    )
  }
}
