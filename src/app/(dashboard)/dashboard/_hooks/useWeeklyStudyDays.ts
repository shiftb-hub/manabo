'use client'
import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

import { WeeklyStudyDay } from '../_types/weeklyStudyDay'

export const useWeeklyStudyDays = () => {
  const { data, error, isLoading } = useSWR<WeeklyStudyDay>(
    '/api/dashboard/weekly-days',
    fetcher,
  )
  return {
    weeklyDaysCount: data?.activeDays ?? 0,
    error,
    isLoading
  }
}