'use client'
import React, { createContext, useCallback, useContext } from 'react'

import { useSessionSWR } from '@/app/_hooks/useSessionSWR'
import type { AppUser } from '@/app/_types/user'

type UserContextValue = {
  user: AppUser | null
  refreshFromServer: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserProvider({
  initialUser,
  children,
}: {
  initialUser: AppUser | null
  children: React.ReactNode
}) {
  
  const { user, mutate } = useSessionSWR(initialUser)
 
  const refreshFromServer = useCallback(() => {
    
    mutate()
  }, [mutate])

  return <UserContext.Provider value={{ user, refreshFromServer }}>{children}</UserContext.Provider>
}

export function useSession() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useSession must be used within UserProvider')
  return ctx
}
