'use client'

import { useCallback, useMemo } from 'react'
import useSWR, { type SWRConfiguration } from 'swr'

import { fetchRanking, rankingEndpoint } from '../_api/rankingClient'
import { toViewUser } from '../_mappers/toViewUser'
import type { RankingApiResponse } from '../_types/rankingApiTypes'
import type { RankingPeriod, RankingUser } from '../_types/rankingTypes'

export type UseRankingResult = {
  items: RankingUser[]
  currentUser: (RankingUser & { isCurrentUser: true }) | null
  loading: boolean
  error: string | null
  refresh: () => void
}

/** API 空レス時の既定値（SWR の初期値／フォールバックにも使用） */
const EMPTY_RESPONSE: RankingApiResponse = { items: [], currentUser: null }

/** SWR 共通オプション（このフックの意図を一箇所に集約） */
const SWR_OPTIONS: SWRConfiguration<RankingApiResponse, Error> = {
  fallbackData: EMPTY_RESPONSE,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  revalidateOnMount: true,
  dedupingInterval: 0,
}

/**
 * ランキングデータを取得して UI 用に整形して返すフック
 * - データは /api/ranking?period=... を購読
 * - サーバーの型 (RankingApiResponse) → 表示用型 (RankingUser) へマッピング
 */
export function useRanking(period: RankingPeriod): UseRankingResult {
  const {
    data = EMPTY_RESPONSE,
    error,
    isLoading,
    mutate,
  } = useSWR<RankingApiResponse>(rankingEndpoint(period), fetchRanking, SWR_OPTIONS)

  const items = useMemo<RankingUser[]>(
    () => (data.items.length ? data.items.map(toViewUser) : []),
    [data.items],
  )

  const currentUser = useMemo<(RankingUser & { isCurrentUser: true }) | null>(
    () =>
      data.currentUser ? { ...toViewUser(data.currentUser), isCurrentUser: true as const } : null,
    [data.currentUser],
  )

  const refresh = useCallback(() => {
    void mutate()
  }, [mutate])

  return {
    items,
    currentUser,
    loading: isLoading,
    error: error ? 'ランキングの取得に失敗しました' : null,
    refresh,
  }
}
