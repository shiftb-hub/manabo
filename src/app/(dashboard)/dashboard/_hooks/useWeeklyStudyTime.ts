'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

interface WeeklyStudyTimeResponse {
  currentHours: number
  goalHours: number
  percentage: number
}

export const useWeeklyStudyTime = () => {
  const { data, error, isLoading } = useSWR<WeeklyStudyTimeResponse>(
    '/api/dashboard/weekly-progress',
    fetcher,
  )

  return {
    weeklyStudyTime: data?.currentHours ?? 0,
    weeklyGoal: data?.goalHours ?? 0,
    weeklyPercentage: data?.percentage ?? 0,
    error,
    isLoading,
  }
}
