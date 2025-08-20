'use client'
import useSWR from 'swr'

import type { AppUser } from '@/app/_types/user'

const fetcher = async (url: string): Promise<AppUser> => {
  try {
    const res = await fetch(url, {
      credentials: 'include',   
      cache: 'no-store', // キャッシュ制御を追加
      // Cookie送信
    })

    if (res.status === 401) {
      throw new Error('Unauthorized')
    }

    if (!res.ok) {
      throw new Error('Failed to fetch session')
    }

    return res.json()
  } catch (error) {
    console.error('useSessionSWR fetcher error:', error)
    throw error
  }
}

// useSessionSWRの戻り値の型定義
type UseSessionSWRReturn = {
  user: AppUser | null
  loading: boolean
  error: string | null
  refresh: () => void
}

export const useSessionSWR = (initialUser?: AppUser | null): UseSessionSWRReturn => {
  const { data, error, isLoading, mutate } = useSWR<AppUser>('/api/session', fetcher, {
    fallbackData: initialUser || undefined,
    revalidateOnMount: true,
    revalidateOnFocus: false,
  })
  const isUnauthorized = error?.message.includes('Unauthorized')

  return {
    user: isUnauthorized ? null : data || null,
    loading: isLoading,
    error: isUnauthorized ? null : (error ? 'セッションの取得に失敗しました' : null),
    refresh: () => mutate(), // 関数として返す
  }
}
