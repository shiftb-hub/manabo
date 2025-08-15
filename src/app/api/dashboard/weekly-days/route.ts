import { TZDate } from '@date-fns/tz'
import { endOfWeek, startOfWeek } from 'date-fns'
import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'

export const GET = async () => {
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  const jstNow = new TZDate(new Date(), 'Asia/Tokyo')
  const jstStartWeek = startOfWeek(jstNow, { weekStartsOn: 0 })
  const jstEndWeek = endOfWeek(jstNow, { weekStartsOn: 0 })

  const utcStart = new Date(jstStartWeek)
  const utcEnd = new Date(jstEndWeek)

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

    return NextResponse.json({ activeDays: weeklyStudyCount }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}
