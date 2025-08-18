// src/app/(timeline)/timeline/_hooks/useTimeline.ts
'use client'

import useSWR from 'swr'

import type { TimelinePost, TimelineResponse } from '../_types/types'

// 既存の fetcher があればそちらを使ってOK
const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error('Failed to fetch timeline')
    return r.json()
  })

export function useTimelinePosts() {
  const { data, error, isLoading, mutate } = useSWR<TimelineResponse>('/api/timeline', fetcher, {
    revalidateOnFocus: false,
  })

  return {
    posts: (data?.items ?? []) as TimelinePost[],
    isLoading,
    error,
    refresh: mutate,
  }
}
