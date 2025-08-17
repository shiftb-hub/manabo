'use server'

import { TZDateMini } from '@date-fns/tz'

import { prisma } from '@/app/_lib/prisma'
import { calculateStreak } from '@/app/_utils/streakCalculator'

/**
 * ランキング用：指定 userIds の “現在の連続日数（current streak）” を一括算出
 * - Prisma で直近 daysWindow 日の学習日時を取得
 * - ユーザーごとに Date[] を作り、calculateStreak に渡して算出（JST/昨日終端OK）
 * 戻り: Map<userId, streak>
 */
export async function getCurrentStreaksForUsers(
  userIds: number[],
  daysWindow = 60,
): Promise<Map<number, number>> {
  if (!userIds || userIds.length === 0) return new Map<number, number>()

  // === JST の “今日 00:00” を UTC で求め、daysWindow 分さかのぼって下限を作る ===
  const ZONE = 'Asia/Tokyo' as const
  const DAY_MS = 86_400_000
  const jstMidnightUtc = (utc: Date) => {
    const t = new TZDateMini(utc, ZONE)
    const m = new TZDateMini(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0, ZONE)
    return new Date(m.getTime())
  }
  const todayJstStartUtc = jstMidnightUtc(new Date())
  const sinceUtc = new Date(todayJstStartUtc.getTime() - (daysWindow - 1) * DAY_MS)

  // === 直近 daysWindow 日の記録を全員分まとめて取得（必要最小限の列だけ） ===
  const records = await prisma.learningRecord.findMany({
    select: { userId: true, learningDate: true },
    where: {
      userId: { in: userIds },
      learningDate: { gte: sinceUtc },
    },
    orderBy: { learningDate: 'desc' },
  })

  // === ユーザーごとに Date[] を作成 ===
  const byUser = new Map<number, Date[]>()
  for (const r of records) {
    const arr = byUser.get(r.userId)
    if (arr) arr.push(r.learningDate)
    else byUser.set(r.userId, [r.learningDate])
  }

  // === calculateStreak を適用（JST／昨日終端OKを明示） ===
  const result = new Map<number, number>()
  for (const uid of userIds) {
    const dates = byUser.get(uid) ?? []
    const streak = calculateStreak(dates)
    result.set(uid, streak)
  }
  return result
}
