'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

interface WeeklyStudyTimeResponse {
  currentHours: number
  goalHours: number
  percentage: number
  remainingHours: number
}

export const useWeeklyStudyTime = () => {
  const { data, error, isLoading } = useSWR<WeeklyStudyTimeResponse>(
    '/api/dashboard/weekly-progress',
    fetcher,
  )
  const remaining =
    data?.remainingHours ?? Math.max((data?.goalHours ?? 0) - (data?.currentHours ?? 0), 0)
  console.log('Weekly Study Time:', {
    currentHours: data?.currentHours,
    goalHours: data?.goalHours,
    percentage: data?.percentage,
    remaining,
  })
  return {
    weeklyStudyTime: data?.currentHours ?? 0,
    weeklyGoal: data?.goalHours ?? 0,
    weeklyPercentage: data?.percentage ?? 0,
    remaining,
    error,
    isLoading,
  }
}
