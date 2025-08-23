'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/_utils/fetcher'

import type { TimelinePost, TimelineResponse } from '../_types/types'

export function useTimelinePosts() {
  const { data, error, isLoading, mutate } = useSWR<TimelineResponse>(
    '/api/timeline',
    (url) => fetcher<TimelineResponse>(url),
    { revalidateOnFocus: false },
  )

  return {
    posts: (data?.items ?? []) as TimelinePost[],
    isLoading,
    error,
    refresh: mutate,
  }
}
