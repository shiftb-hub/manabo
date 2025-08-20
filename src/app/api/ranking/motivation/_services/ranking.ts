// src/app/api/ranking/motivation/_services/ranking.ts
import type { Period, RankingApiResponse } from '../_types'

// fetch を依存注入できるように（テスト容易化）
type FetchLike = typeof fetch

export async function fetchRankingFor(req: Request, period: Period, fetcher: FetchLike = fetch) {
  const base = new URL(req.url).origin
  const res = await fetcher(`${base}/api/ranking?period=${period}`, {
    headers: { cookie: req.headers.get('cookie') ?? '' },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`/api/ranking?period=${period} HTTP ${res.status}`)
  return (await res.json()) as RankingApiResponse
}

export async function fetchLatestStreak(
  req: Request,
  fetcher: FetchLike = fetch,
): Promise<number | null> {
  try {
    const base = new URL(req.url).origin
    const res = await fetcher(`${base}/api/dashboard/streak`, {
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
