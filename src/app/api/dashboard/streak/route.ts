import { NextResponse } from 'next/server'
import { createClient } from '@/app/_utils/supabase/server'
import { prisma } from '@/app/_lib/prisma'
import { calculateStreak } from '@/app/_utils/streakCalculator'

export const GET = async () => {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        {
          message: '認証が必要です',
        },
        { status: 401 },
      )
    }

    const appUser = await prisma.user.findUnique({
      where: { supabaseUserId: user.id },
      select: { id: true },
    })

    if (!appUser) {
      return NextResponse.json(
        {
          message: 'ユーザーが見つかりません',
        },
        { status: 404 },
      )
    }

    const learningRecords = await prisma.learningRecord.findMany({
      where: { userId: appUser.id },
      select: { learningDate: true },
      orderBy: { learningDate: 'desc' },
    })

    const learningDates = learningRecords.map((record) => record.learningDate)
    const streakCount = calculateStreak(learningDates)

    return NextResponse.json({
      streakCount,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}
