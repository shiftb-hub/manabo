// src/app/api/ranking/motivation/route.ts
import { NextResponse } from 'next/server'

import { getAuthUser } from '@/app/_utils/api/requireUser'

import type { MotivationMap } from '@/app/(ranking)/ranking/_types/motivationTypes'

/* =========================
   Types
   ========================= */
type Period = 'day' | 'week' | 'month'
type Trend = '上昇' | '下降' | 'キープ'

type ApiUiRankingUser = {
  userId: number
  rank: number
  name: string
  avatar: string | null
  time: number // 分
  change: number // +上昇 / -下降 / 0
  streak: number
}
type RankingApiResponse = { items: ApiUiRankingUser[]; currentUser: ApiUiRankingUser | null }

type LlmCtx =
  | { hasData: false; label: string }
  | {
      hasData: true
      label: string
      rank: number
      hours: number
      trend: Trend
      streak: number
    }

/* =========================
   Constants
   ========================= */
const PERIODS: readonly Period[] = ['day', 'week', 'month'] as const
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'
const OPENAI_MODEL = 'gpt-5-mini' // 必要に応じて変更
const CACHE_CONTROL = 'private, max-age=600' // 10分キャッシュ
const MAX_CHARS = 70 // 目安文字数（プロンプト説明用のみ）

/* =========================
   Helpers: small utilities
   ========================= */
const hoursFromMinutes = (min: number) => Math.round((min / 60) * 10) / 10

const labelForPeriod = (p: Period) => (p === 'day' ? '今日は' : p === 'week' ? '今週は' : '今月は')

const trendOf = (change: number): Trend => (change > 0 ? '上昇' : change < 0 ? '下降' : 'キープ')

function hashStr(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function styleHintFor(period: Period) {
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
  const seed = new Date().toISOString().slice(0, 10) + period
  return arr[hashStr(seed) % arr.length]
}

function toLlmCtx(u: ApiUiRankingUser | null, label: string): LlmCtx {
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

/* =========================
   Helpers: data fetchers
   ========================= */
async function fetchRankingFor(req: Request, period: Period) {
  const base = new URL(req.url).origin
  const res = await fetch(`${base}/api/ranking?period=${period}`, {
    headers: { cookie: req.headers.get('cookie') ?? '' },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`/api/ranking?period=${period} HTTP ${res.status}`)
  return (await res.json()) as RankingApiResponse
}

// /api/dashboard/streak を想定（キー名の揺れに冗長対応）
async function fetchLatestStreak(req: Request): Promise<number | null> {
  try {
    const base = new URL(req.url).origin
    const res = await fetch(`${base}/api/dashboard/streak`, {
      headers: { cookie: req.headers.get('cookie') ?? '' },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const json = await res.json()
    const v = [json?.streakCount, json?.count, json?.days].find((n) => typeof n === 'number')
    return typeof v === 'number' ? v : null
  } catch {
    return null
  }
}

/* =========================
   Fallback (templates rotation)
   ========================= */
const FALLBACK_TEMPLATES: Array<(u: ApiUiRankingUser, label: string) => string> = [
  (u, label) =>
    `${label}${u.rank}位（${trendOf(u.change)}中）。${u.streak}日連続、今日は${hoursFromMinutes(u.time)}hめざしましょう。`,
  (u, label) =>
    `${label}いま${u.rank}位。${u.streak}日継続できています。この波に乗って${hoursFromMinutes(u.time)}hを積み増しましょう。`,
  (u, label) =>
    `${label}${u.rank}位を${u.change === 0 ? '維持' : u.change > 0 ? '奪取' : '粘り'}。連続${u.streak}日、あと少しだけ手を動かしてみませんか。`,
]

function fallbackMessages(ctx: Record<Period, ApiUiRankingUser | null>): MotivationMap {
  const todayKey = new Date().toISOString().slice(0, 10)
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

/* =========================
   OpenAI call (isolated)
   ========================= */
async function callOpenAI(payload: {
  llmCtx: Record<Period, LlmCtx>
  styleHints: Record<Period, string>
}): Promise<MotivationMap | null> {
  const apiKey = process.env.OPENAI_API_KEY ?? ''
  if (!apiKey) return null

  const system =
    'あなたは日本語で短く前向きな応援メッセージを作るコーチです。' +
    `各期間(day/week/month)ごとに 1〜2 文、丁寧語、絵文字なし、最大 ${MAX_CHARS} 文字程度で。` +
    '3 期間の文は「語尾・動詞・構文」が重複しないようにしてください（同じ語尾連続禁止）。' +
    'データがある期間は、順位（例:「3位」）、変動傾向（上昇/下降/キープ）、連続日数（◯日）のうち少なくとも 2 点に触れてください。' +
    '学習時間は hours をそのまま「h」単位で記述してください（例: 3.5h）。' +
    '出力は必ず JSON オブジェクト { "day": "...", "week": "...", "month": "..." } のみ。'

  const user = {
    instruction:
      '以下の前計算済みデータと文体ヒントを使って、day/week/month の各キーに応援文を 1 つずつ返してください。',
    context: payload.llmCtx,
    styleHints: payload.styleHints,
    notes:
      'hasData=false の期間は優しく促す。hasData=true の期間は指示通り。' +
      '3 期間の文体・表現はできるだけ差をつけ、語尾の連続や同一動詞の反復を避ける。',
  }

  const resp = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.6,
      top_p: 0.9,
      frequency_penalty: 0.4,
      presence_penalty: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: JSON.stringify(user) },
      ],
    }),
  })

  if (!resp.ok) return null

  const data = await resp.json()
  const raw = data?.choices?.[0]?.message?.content ?? '{}'
  try {
    const parsed = JSON.parse(raw) as MotivationMap
    // デバッグログ
    // eslint-disable-next-line no-console
    console.log('[motivation][openai]', parsed, { styleHints: payload.styleHints })
    return parsed
  } catch {
    return null
  }
}

/* =========================
   Handler
   ========================= */
export async function GET(req: Request) {
  try {
    // 認証（未ログインでも続行可）
    await getAuthUser()

    const [dayRes, weekRes, monthRes] = await Promise.all([
      fetchRankingFor(req, 'day'),
      fetchRankingFor(req, 'week'),
      fetchRankingFor(req, 'month'),
    ])

    // 連続日数の最新値を 3 期間へ反映（期間非依存メトリクス）
    const latestStreak = await fetchLatestStreak(req)

    const ctxBase: Record<Period, ApiUiRankingUser | null> = {
      day: dayRes.currentUser ? { ...dayRes.currentUser } : null,
      week: weekRes.currentUser ? { ...weekRes.currentUser } : null,
      month: monthRes.currentUser ? { ...monthRes.currentUser } : null,
    }
    if (latestStreak != null) {
      for (const p of PERIODS) if (ctxBase[p]) ctxBase[p]!.streak = latestStreak
    }

    const llmCtx: Record<Period, LlmCtx> = {
      day: toLlmCtx(ctxBase.day, labelForPeriod('day')),
      week: toLlmCtx(ctxBase.week, labelForPeriod('week')),
      month: toLlmCtx(ctxBase.month, labelForPeriod('month')),
    }

    const styleHints: Record<Period, string> = {
      day: styleHintFor('day'),
      week: styleHintFor('week'),
      month: styleHintFor('month'),
    }

    const ai = await callOpenAI({ llmCtx, styleHints })
    const messages = ai ?? fallbackMessages(ctxBase)
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
