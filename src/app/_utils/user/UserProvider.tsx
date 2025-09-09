'use client'
import React, { type ReactNode, createContext, useContext, useMemo } from 'react'

import { useSessionSWR } from '@/app/_hooks/useSessionSWR'
import type { AppUser } from '@/app/_types/user'

type Session = AppUser | null

type UserContextValue = {
  user: Session
  loading: boolean
  error: string | null
  refresh: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserProvider({
  children,
  initialUser,
}: {
  children: ReactNode
  initialUser?: Session
}) {
  const { user, loading, error, refresh } = useSessionSWR(initialUser)

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      loading,
      error,
      refresh: () => {
        void refresh()
      },
    }),
    [user, loading, error, refresh],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useSession() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useSession must be used within UserProvider')
  return ctx
}
