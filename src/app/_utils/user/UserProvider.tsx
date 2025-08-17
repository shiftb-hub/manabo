'use client'
// import { useRouter } from 'next/navigation'
import React, { createContext, useCallback, useContext } from 'react'

import { useSessionSWR } from '@/app/_hooks/useSessionSWR'
import type { AppUser } from '@/app/_types/user'

type UserContextValue = {
  user: AppUser | null
  // setUser: (u: AppUser | null) => void
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
  // const [user, setUser] = useState<AppUser | null>(initialUser)
  const { user, mutate } = useSessionSWR(initialUser)
  // const router = useRouter()

  const refreshFromServer = useCallback(() => {
    // router.refresh()
    // }, [router])
    mutate()
  }, [mutate])

  // return <UserContext.Provider value={{ user,setUser, refreshFromServer }}>{children}</UserContext.Provider>
  return <UserContext.Provider value={{ user, refreshFromServer }}>{children}</UserContext.Provider>
}

export function useSession() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useSession must be used within UserProvider')
  return ctx
}
