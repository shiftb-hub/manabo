'use client'

import type { SWRConfiguration } from 'swr'
import useSWR from 'swr'

import { api } from '../_utils/api'

const fetcher = async <T>(path: string): Promise<T | undefined> => {
  return await api.get<T>(path)
}

export const useFetch = <T>(
  apiPath: string | null,
  configuration?: SWRConfiguration<T | undefined, { message: string }>,
) => {
  const result = useSWR<T | undefined, { message: string }>(apiPath, fetcher, configuration)

  return result
}
