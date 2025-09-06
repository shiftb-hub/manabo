import { NextResponse } from 'next/server'

import { getAuthUser } from '@/app/_utils/api/requireUser'

export const GET = async () => {
  try {
    const user = await getAuthUser()

    if (!user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
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
      { message: error instanceof Error ? error.message : 'Failed to get session' },
      { status: 500, headers: { 'Cache-Control': 'no-store', Vary: 'Cookie' } },
    )
  }
}
