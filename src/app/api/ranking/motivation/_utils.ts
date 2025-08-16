// src/app/api/ranking/motivation/_utils.ts
import type { ApiUiRankingUser, LlmCtx, Period, Trend } from './_types'

export const hoursFromMinutes = (min: number) => Math.round((min / 60) * 10) / 10

export const labelForPeriod = (p: Period) =>
  p === 'day' ? '今日は' : p === 'week' ? '今週は' : '今月は'

export const trendOf = (change: number): Trend =>
  change > 0 ? '上昇' : change < 0 ? '下降' : 'キープ'

export function hashStr(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function styleHintFor(period: Period, nowISO = new Date().toISOString()) {
  const styles: Record<Period, readonly string[]> = {
    day: [
      '小さな一歩を促す',
      '具体的な次アクションを提案',
      '今日の達成感を言語化',
      '短時間ブロックを推奨',
    ],
    week: ['習慣化と流れを称賛', '無理のない継続', '変動を簡潔に言及', '積み上げを可視化'],
    month: ['長期視点で評価', '到達点と次の目安', '安定運用と微調整', '大目標と日々を結び付ける'],
  }
  const arr = styles[period]
  const seed = nowISO.slice(0, 10) + period
  return arr[hashStr(seed) % arr.length]
}

export function toLlmCtx(u: ApiUiRankingUser | null, label: string): LlmCtx {
  if (!u) return { hasData: false, label }
  return {
    hasData: true,
    label,
    rank: u.rank,
    hours: hoursFromMinutes(u.time),
    trend: trendOf(u.change),
    streak: u.streak,
  }
}
