import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { handleApiError } from '@/app/_utils/api/errorHandler'
import { requireUser } from '@/app/_utils/api/requireUser'
import { calculateTotalDuration, formatDuration } from '@/app/_utils/formatters'
import { jstToUtcRange } from '@/app/_utils/jstToUtcRange'
import { calculateStreak } from '@/app/_utils/streakCalculator'

export interface StudySummaryResponse {
  subject: string
  duration: string
  streak: number
}

export const GET = async () => {
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  const { utcStart, utcEnd } = jstToUtcRange(new Date(), 'day')

  try {
    const [todayRecords, allDates] = await Promise.all([
      // 今日の学習記録を取得
      prisma.learningRecord.findMany({
        where: {
          userId: user.id,
          startTime: { gte: utcStart, lt: utcEnd },
        },
        orderBy: { createdAt: 'desc' },
      }),
      // ストリーク計算用に全記録の日付だけ取得
      prisma.learningRecord.findMany({
        where: { userId: user.id },
        select: { learningDate: true },
        orderBy: { learningDate: 'desc' },
      }),
    ])

    const streakCount = calculateStreak(allDates.map((r) => r.learningDate))

    // 共通関数を使用して時間を計算・整形
    const totalMinutes = calculateTotalDuration(todayRecords)
    const duration = formatDuration(totalMinutes)

    // カテゴリ名を取得
    let subject = '学習'
    if (todayRecords.length > 0 && todayRecords[0].categoryId) {
      const category = await prisma.category.findUnique({
        where: { id: todayRecords[0].categoryId },
        select: { categoryName: true },
      })
      subject = category?.categoryName ?? '学習'
    }

    const response: StudySummaryResponse = {
      subject,
      duration,
      streak: streakCount,
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return handleApiError(error)
  }
}
