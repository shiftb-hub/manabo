import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'
import { calculateStreak } from '@/app/_utils/streakCalculator'

export const GET = async () => {
  const { user, errorResponse } = await requireUser()
  if (!user) return errorResponse

  try {
    const learningRecords = await prisma.learningRecord.findMany({
      where: { userId: user.id },
      select: { learningDate: true },
      orderBy: { learningDate: 'desc' },
    })

    const learningDates = learningRecords.map((r) => r.learningDate)
    const streakCount = calculateStreak(learningDates)

    return NextResponse.json({ streakCount }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}
