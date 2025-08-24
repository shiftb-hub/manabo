// src/app/_server/streak.ts
'use server'

import { TZDateMini } from '@date-fns/tz'

import { prisma } from '@/app/_lib/prisma'
import { calculateStreak } from '@/app/_utils/streakCalculator'

/**
 * 指定ユーザー集合の “直近 daysWindow 日” に基づく連続学習日数（JST基準）を返す。
 * - learning_records.learning_date を対象（UTC保存）
 * - 日単位の重複を JST で正規化（1ユーザー1日1カウント）
 * - 最終的な連続数の算出は calculateStreak() に委譲（JST/昨日終端OKの仕様に揃える）
 *
 * 戻り値: Map<userId, streakCount>
 */
export async function getCurrentStreaksForUsers(
  userIds: number[],
  daysWindow = 60,
): Promise<Map<number, number>> {
  if (!userIds?.length) return new Map<number, number>()

  const ZONE = 'Asia/Tokyo' as const
  const DAY_MS = 86_400_000

  // JST の“その日 00:00”に相当する実UTC時刻を返す
  const jstMidnightUtc = (base: Date) => {
    const t = new TZDateMini(base, ZONE)
    const m = new TZDateMini(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0, ZONE)
    return new Date(m.getTime())
  }

  // 直近 daysWindow 日の下限（JSTの今日00:00から daysWindow-1 日さかのぼる）
  const todayJstStartUtc = jstMidnightUtc(new Date())
  const sinceUtc = new Date(todayJstStartUtc.getTime() - (daysWindow - 1) * DAY_MS)

  // 必要最小限の列で取得（learningDate は schema 上 non-null）
  const rows = await prisma.learningRecord.findMany({
    where: { userId: { in: userIds }, learningDate: { gte: sinceUtc } },
    select: { userId: true, learningDate: true },
    orderBy: { learningDate: 'desc' },
  })

  // JST “YYYY-MM-DD” 文字列に正規化して日重複を排除
  const pad2 = (n: number) => String(n).padStart(2, '0')
  const toJstYmd = (utc: Date) => {
    const t = new TZDateMini(utc, ZONE)
    return `${t.getFullYear()}-${pad2(t.getMonth() + 1)}-${pad2(t.getDate())}`
  }

  // ユーザーごとに 1日1レコードへ圧縮（calculateStreak に渡すのは Date[]）
  const byUser = new Map<number, Date[]>()
  const seen = new Map<number, Set<string>>()

  for (const r of rows) {
    const ymd = toJstYmd(r.learningDate)
    const s = seen.get(r.userId) ?? (seen.set(r.userId, new Set<string>()), seen.get(r.userId)!)
    if (s.has(ymd)) continue
    s.add(ymd)

    const arr = byUser.get(r.userId) ?? (byUser.set(r.userId, []), byUser.get(r.userId)!)
    arr.push(r.learningDate)
  }

  // 連続日数を calculateStreak で算出（JST/昨日終端可のルールに揃える）
  const result = new Map<number, number>()
  for (const uid of userIds) {
    const dates = byUser.get(uid) ?? []
    result.set(uid, calculateStreak(dates))
  }
  return result
}
