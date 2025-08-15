'use client'

import { type ReactNode, createContext, useContext, useMemo } from 'react'
import useSWR from 'swr'

import type { AppUser } from '@/app/_types/user'

type Session = AppUser | null

type UserContextValue = {
  user: Session
  loading: boolean
  error: string | null
  refresh: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

const fetcher = async (url: string): Promise<Session> => {
  const res = await fetch(url, { credentials: 'include', cache: 'no-store' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()) as Session
}

export function UserProvider({
  children,
  initialUser,
}: {
  children: ReactNode
  initialUser?: Session
}) {
  const { data, error, isLoading, mutate } = useSWR<Session>('/api/session', fetcher, {
    fallbackData: initialUser ?? null,
    revalidateOnMount: true,
    revalidateOnFocus: false,
  })

  const value = useMemo<UserContextValue>(
    () => ({
      user: data ?? null,
      loading: isLoading,
      error: error ? 'セッションの取得に失敗しました' : null,
      refresh: () => {
        void mutate()
      },
    }),
    [data, isLoading, error, mutate],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within <UserProvider>')
  return ctx
}
