'use client'
import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

import { WeeklyStudyDays } from '../_types/weeklyStudyDays'

export const useWeeklyDaysCount = () => {
  const { data, error, isLoading } = useSWR<WeeklyStudyDays>('/api/dashboard/weekly-days', fetcher)
  return {
    weeklyDaysCount: data?.weeklyStudyCount ?? 0,
    error,
    isLoading,
  }
}
