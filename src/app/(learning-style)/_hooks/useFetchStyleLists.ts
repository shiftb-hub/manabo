import useSWR  from  'swr'

import { fetcher } from '@/app/_utils/fetcher'

import { CompatibleUser } from '../_types/compatibleUser'
import { LearningStyleLists } from '../_types/learningStyleLists'

interface LearningApiResult {
  learningStyleLists: LearningStyleLists[]
  compatibleUsersMap: Record<string, CompatibleUser[]>
}

export const useFetchLearningLists = () => {
  const { data, error, isLoading, mutate } = useSWR<LearningApiResult>(
    '/api/learning-styles',
    fetcher,
  )

  return {
    learningStyleLists: data?.learningStyleLists || [],
    compatibleUsersMap: data?.compatibleUsersMap || {},
    error,
    isLoading,
    mutate
  }
}