import type { RankingApiResponse } from '../_types/rankingApiTypes'
import type { RankingPeriod } from '../_types/rankingTypes'

export const rankingEndpoint = (period: RankingPeriod) => `/api/ranking?period=${period}`

export const fetchRanking = async (url: string): Promise<RankingApiResponse> => {
  const res = await fetch(url, { credentials: 'include', cache: 'no-store' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()) as RankingApiResponse
}
