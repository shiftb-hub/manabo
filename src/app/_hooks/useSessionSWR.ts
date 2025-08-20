'use client'
import useSWR from 'swr'

import type { AppUser } from '@/app/_types/user'

const fetcher = async (url: string): Promise<AppUser> => {
  try {
    const res = await fetch(url, {
      credentials: 'include', // Cookie送信
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

export const useSessionSWR = (initialUser?: AppUser | null) => {
  const { data, error, isLoading, mutate } = useSWR<AppUser>('/api/session', fetcher, {
    fallbackData: initialUser || undefined, // 初期データとして設定
  })
  const isUnauthorized = error?.message.includes('Unauthorized')

  return {
    user: isUnauthorized ? null : data || null,
    isLoading,
    error: isUnauthorized ? null : error,
    mutate,
  }
}
