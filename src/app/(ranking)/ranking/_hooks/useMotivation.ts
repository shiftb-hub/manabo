'use client'

import useSWR from 'swr'

import type { MotivationMap } from '../_types/motivationTypes'

// 空のデフォルト（SWRのfallbackにも使う）
const EMPTY: MotivationMap = { day: '', week: '', month: '' }

const fetcher = async (url: string): Promise<MotivationMap> => {
  const res = await fetch(url, { credentials: 'include', cache: 'no-store' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()) as MotivationMap
}

export function useMotivation() {
  const {
    data = EMPTY,
    error,
    isLoading,
    mutate,
  } = useSWR<MotivationMap>('/api/ranking/motivation', fetcher, {
    fallbackData: EMPTY,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  })

  // 期間キーは 'day' | 'week' | 'month' を自動推論
  const getMessage = (p: keyof MotivationMap): string => data[p] ?? ''

  return {
    messages: data,
    getMessage,
    loading: isLoading,
    error: error ? '応援メッセージの取得に失敗しました' : null,
    refresh: mutate,
  }
}
