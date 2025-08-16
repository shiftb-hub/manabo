// src/app/api/ranking/motivation/_compose.ts
import { PERIODS } from './_constants'
import type { ApiUiRankingUser, LlmCtx, MotivationMap, Period } from './_types'
import {
  hashStr,
  hoursFromMinutes,
  labelForPeriod,
  styleHintFor,
  toLlmCtx,
  trendOf,
} from './_utils'

const FALLBACK_TEMPLATES: Array<(u: ApiUiRankingUser, label: string) => string> = [
  (u, label) =>
    `${label}${u.rank}位（${trendOf(u.change)}中）。${u.streak}日連続、今日は${hoursFromMinutes(u.time)}hめざしましょう。`,
  (u, label) =>
    `${label}いま${u.rank}位。${u.streak}日継続できています。この波に乗って${hoursFromMinutes(u.time)}hを積み増しましょう。`,
  (u, label) =>
    `${label}${u.rank}位を${u.change === 0 ? '維持' : u.change > 0 ? '奪取' : '粘り'}。連続${u.streak}日、あと少しだけ手を動かしてみませんか。`,
]

export function buildStyleHints(nowISO = new Date().toISOString()) {
  return {
    day: styleHintFor('day', nowISO),
    week: styleHintFor('week', nowISO),
    month: styleHintFor('month', nowISO),
  }
}

export function buildLlmCtx(
  ctxBase: Record<Period, ApiUiRankingUser | null>,
): Record<Period, LlmCtx> {
  return {
    day: toLlmCtx(ctxBase.day, labelForPeriod('day')),
    week: toLlmCtx(ctxBase.week, labelForPeriod('week')),
    month: toLlmCtx(ctxBase.month, labelForPeriod('month')),
  }
}

export function applyStreakToAll(
  ctxBase: Record<Period, ApiUiRankingUser | null>,
  latestStreak: number | null,
) {
  if (latestStreak == null) return ctxBase
  const next = { ...ctxBase }
  for (const p of PERIODS) if (next[p]) next[p] = { ...next[p]!, streak: latestStreak }
  return next
}

export function fallbackMessages(
  ctx: Record<Period, ApiUiRankingUser | null>,
  nowISO = new Date().toISOString(),
): MotivationMap {
  const todayKey = nowISO.slice(0, 10)
  const pick = (p: Period, noneMsg: string) => {
    const u = ctx[p]
    if (!u) return noneMsg
    const idx = hashStr(p + todayKey) % FALLBACK_TEMPLATES.length
    return FALLBACK_TEMPLATES[idx](u, labelForPeriod(p))
  }
  return {
    day: pick('day', '今日はデータがまだありません。まずは短時間でも学習を始めましょう。'),
    week: pick('week', '今週はデータがまだありません。できる日から少しずつ積み上げましょう。'),
    month: pick('month', '今月はデータがまだありません。今週のどこかで着手してみましょう。'),
  }
}
