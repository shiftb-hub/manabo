import { NextResponse } from 'next/server'
import { prisma } from '@/app/_lib/prisma'
import { calculateStreak } from '@/app/_utils/streakCalculator'
import { getCurrentUser } from '@/app/_utils/supabase/getCurrentUser'

export const GET = async () => {
  try {
    const user = await getCurrentUser()

    const learningRecords = await prisma.learningRecord.findMany({
      where: { userId: user.id },
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
