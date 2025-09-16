'use client'

import { useFetch } from '@/app/_hooks/useFetch'

import type { StudySummary } from '../_types'

export const useStudySummary = () => {
  const { data, error, isLoading } = useFetch<StudySummary>('/api/sns-generator/study-summary')

  return {
    studySummary: data,
    isLoading,
    error,
  }
}
