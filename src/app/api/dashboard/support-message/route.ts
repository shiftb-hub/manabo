import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'
import { getWeeklyGoalHours } from '@/app/_utils/goalHelpers'
import { jstToUtcRange } from '@/app/_utils/jstToUtcRange'
import { calculateStreak } from '@/app/_utils/streakCalculator'
import { calculateTotalHours, getWeekUtcRange } from '@/app/_utils/studyTimeHelpers'

import { CACHE_CONTROL } from './_constants'
import { callOpenAI } from './_services/openai'

type TodayStudyRecord = { duration: number | null }

// TODO: 仮のhandleApiError。ダッシュボード：AIメッセージの実装#83 マージ後に差し替える
const handleApiError = (e: unknown) => {
  console.error(e)
  return NextResponse.json({ message: '仮のエラー処理です' }, { status: 500 })
} //仮ここまで

export const GET = async () => {
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  try {
    //streak
    const learningRecords = await prisma.learningRecord.findMany({
      where: { userId: user.id },
      select: { learningDate: true },
      orderBy: { learningDate: 'desc' },
      distinct: ['learningDate'], //日付の重複分排除
    })

    const learningDates = learningRecords.map((r) => r.learningDate)
    const streakCount = calculateStreak(learningDates)

    // 今日の学習時間
    const { utcStart, utcEnd } = jstToUtcRange(new Date(), 'day')
    const todayStudyRecords: TodayStudyRecord[] = await prisma.learningRecord.findMany({
      where: {
        userId: user.id,
        startTime: { gte: utcStart, lt: utcEnd },
      },
      select: { duration: true },
    })

    const totalStudyMinutes = todayStudyRecords.reduce((sum, r) => sum + (r.duration ?? 0), 0)
    const todayHours = Number((totalStudyMinutes / 60).toFixed(2))

    // 今週の進捗
    const { start, end } = getWeekUtcRange()
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
    const weeklyProgress = goalHours > 0 ? Math.round((currentHours / goalHours) * 100) : 0

    const llmCtx = { streakCount, todayHours, weeklyProgress }
    const message = await callOpenAI(llmCtx)

    const res = NextResponse.json({ message }, { status: 200 })
    res.headers.set('Cache-Control', CACHE_CONTROL)
    return res
  } catch (e) {
    return handleApiError(e)
  }
}
