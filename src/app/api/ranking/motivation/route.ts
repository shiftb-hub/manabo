// src/app/api/ranking/motivation/route.ts
import { NextResponse } from 'next/server'

import { getAuthUser } from '@/app/_utils/api/requireUser'

import { applyStreakToAll, buildLlmCtx, buildStyleHints, fallbackMessages } from './_compose'
import { CACHE_CONTROL } from './_constants'
import { callOpenAI } from './_services/openai'
import { fetchLatestStreak, fetchRankingFor } from './_services/ranking'
import type { ApiUiRankingUser, MotivationMap, Period } from './_types'

export async function GET(req: Request) {
  try {
    // 未ログインでも続行可能（例外を投げない実装を想定）
    await getAuthUser()

    const [dayRes, weekRes, monthRes] = await Promise.all([
      fetchRankingFor(req, 'day'),
      fetchRankingFor(req, 'week'),
      fetchRankingFor(req, 'month'),
    ])

    const ctxBase: Record<Period, ApiUiRankingUser | null> = {
      day: dayRes.currentUser ? { ...dayRes.currentUser } : null,
      week: weekRes.currentUser ? { ...weekRes.currentUser } : null,
      month: monthRes.currentUser ? { ...monthRes.currentUser } : null,
    }

    const latestStreak = await fetchLatestStreak(req)
    const ctxWithStreak = applyStreakToAll(ctxBase, latestStreak)

    const llmCtx = buildLlmCtx(ctxWithStreak)
    const styleHints = buildStyleHints()

    const ai = await callOpenAI({ llmCtx, styleHints })
    const messages: MotivationMap = ai ?? fallbackMessages(ctxWithStreak)

    const res = NextResponse.json(messages, { status: 200 })
    res.headers.set('Cache-Control', CACHE_CONTROL)
    return res
  } catch {
    return NextResponse.json(
      { day: 'データ取得に失敗しました。しばらくしてからお試しください。', week: '', month: '' },
      { status: 200 },
    )
  }
}
