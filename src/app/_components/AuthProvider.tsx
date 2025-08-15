// src/app/_components/AuthProvider.tsx
'use client'
import { User } from '@prisma/client'
import React,{ createContext, useContext, useEffect, ReactNode } from 'react'
import { SWRConfig ,useSWRConfig  } from 'swr'

import { supabase } from '../_lib/supabaseClient'


interface AuthProviderProps {
  children: ReactNode
  initialUser?: User | null
}

const AuthContext = createContext<{
  initialUser?: User | null
}>({})

const AuthEventListener = () => {
  const { mutate } = useSWRConfig()
  const supabaseClient = supabase()

  useEffect(() => {
    // 初回マウント時に再検証
    mutate('/api/session')

    // 認証イベントを監視
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event, session ? 'session exists' : 'no session')
      
      // 認証状態変化時にセッションを再取得
      await mutate('/api/session')
    })

    return () => subscription.unsubscribe()
  }, [mutate, supabaseClient.auth])

  return null
}

export const AuthProvider = ({ children, initialUser }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ initialUser }}>
      <SWRConfig
        value={{
          fallback: {
            '/api/session': initialUser, // SSRからの初期データ
          },
        }}
      >
        <AuthEventListener />
        {children}
      </SWRConfig>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)