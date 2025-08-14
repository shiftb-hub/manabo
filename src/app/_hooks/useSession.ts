// import { User } from '@prisma/client'
// import useSWR from 'swr'

// import { fetcher } from '../_utils/fetcher'

// export const useSession = () => {
//   const { data, error, isLoading } = useSWR<User>('/api/session', fetcher)

//   return {
//     user: data?.id,
//     isLoading,
//     isError: !!error,
//   }
// }

// src/app/_hooks/useSession.ts
import { User } from '@prisma/client'
import useSWR from 'swr'

const fetcher = async (url: string): Promise<User> => {
  const res = await fetch(url, {
    credentials: 'include', // Cookie送信
  })
  
  if (res.status === 401) {
    // 401の場合はnullを返す
    throw new Error('Unauthorized')
  }
  
  if (!res.ok) {
    throw new Error('Failed to fetch session')
  }
  
  return res.json()
}

export const useSession = () => {
  const { data, error, isLoading, mutate } = useSWR<User>(
    '/api/session',
    fetcher,
    {
      revalidateOnFocus: false,// フォーカス時は再取得しない
      revalidateOnReconnect: true,// 再接続時は再取得
      shouldRetryOnError: (error) => {
        // 401エラーはリトライしない
        return !error.message.includes('Unauthorized')
      },
    }
  )

  return {
    user: error?.message.includes('Unauthorized') ? null : data as User,
    isLoading,
    isError: !!error && !error.message.includes('Unauthorized'),
    mutate,
  }
}
