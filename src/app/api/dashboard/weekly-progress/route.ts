import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import type { WeeklyProgressResponse } from '@/app/_types/dashboard'
import { requireUser } from '@/app/_utils/api/requireUser'
import { getWeeklyGoalHours } from '@/app/_utils/goalHelpers'
import { calculateTotalHours, getWeekUtcRange } from '@/app/_utils/studyTimeHelpers'

export const GET = async () => {
  // 認証（未ログインならここで 401 を返す）
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  try {
    // JST 週（日→土）の境界を UTC の Date で取得
    const { start, end } = getWeekUtcRange()

    // 今週(JST)の学習記録（DBはUTC保存）
    const records = await prisma.learningRecord.findMany({
      where: {
        userId: user.id,
        startTime: { gte: start, lt: end },
      },
      select: { duration: true },
    })

    const minutesArray = records.map((r) => r.duration ?? 0)
    const currentHours = calculateTotalHours(minutesArray)
    const goalHours = await getWeeklyGoalHours()
    const percentage = goalHours > 0 ? Math.round((currentHours / goalHours) * 100) : 0
    const remainingHours = Math.max(goalHours - currentHours, 0)

    const response: WeeklyProgressResponse = {
      currentHours,
      goalHours,
      percentage,
      remainingHours,
    }

    return NextResponse.json(response, { status: 200 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ message }, { status: 500 })
  }
}
