'use client'

import useSWR from 'swr'

import type { WeeklyProgressResponse } from '@/app/_types/dashboard'
import { fetcher } from '@/app/_utils/fetcher'

export const useWeeklyStudyTime = () => {
  const { data, error, isLoading } = useSWR<WeeklyProgressResponse>(
    '/api/dashboard/weekly-progress',
    fetcher,
  )

  return {
    weeklyStudyTime: data?.currentHours ?? 0,
    weeklyGoal: data?.goalHours ?? 0,
    weeklyPercentage: data?.percentage ?? 0,
    remaining: data?.remainingHours ?? 0,
    error,
    isLoading,
  }
}
