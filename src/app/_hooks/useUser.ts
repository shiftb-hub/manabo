import { User } from '@prisma/client'
import useSWR from 'swr'

import { fetcher } from '../_utils/fetcher'

export const useUser = () => {
  const { data, error, isLoading } = useSWR<User>('/api/session', fetcher)

  return {
    user: data?.id,
    isLoading,
    isError: !!error,
  }
}
