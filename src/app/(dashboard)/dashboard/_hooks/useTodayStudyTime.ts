'use client'
import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

import { StudyTimeResponse } from '../_types/todayStudyTime'

export const useTodayStudyTime = () => {
  const { data, error, isLoading } = useSWR<StudyTimeResponse>(
    '/api/dashboard/today-duration',
    fetcher,
  )
  return {
    todayStudyTime: data?.totalStudyHours ?? 0,
    error,
    isLoading,
  }
}
