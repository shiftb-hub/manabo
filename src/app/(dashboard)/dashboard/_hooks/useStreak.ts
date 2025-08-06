'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

type StreakResponse = {
  streakCount: number
}

export const useStreak = () => {
  const { data, error, isLoading } = useSWR<StreakResponse>('/api/dashboard/streak', fetcher)

  return {
    streakCount: data?.streakCount ?? 0,
    isLoading,
    error,
  }
}
