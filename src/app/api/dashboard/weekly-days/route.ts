import { NextResponse } from 'next/server'

import type { WeeklyStudyDays } from '@/app/(dashboard)/dashboard/_types/weeklyStudyDays'
import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'
import { jstToUtcRange } from '@/app/_utils/jstToUtcRange'

export const GET = async () => {
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  const { utcStart, utcEnd } = jstToUtcRange(new Date(), 'week')

  try {
    const weeklyLearningRecords = await prisma.learningRecord.findMany({
      where: {
        userId: user.id,
        startTime: { gte: utcStart, lt: utcEnd },
      },
      select: { learningDate: true },
      orderBy: { learningDate: 'desc' },
    })

    // 今週(日曜始まり~土曜終わり)の学習履歴を取得し、日付けの重複削除をした上で学習日数のカウントを行う(なければ0を返す)
    const weeklyLearningDates = weeklyLearningRecords.map((r) => r.learningDate)
    const weeklyStudyCount = new Set(weeklyLearningDates.map((d) => d.getTime())).size
    const body: WeeklyStudyDays = { weeklyStudyCount }

    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}
