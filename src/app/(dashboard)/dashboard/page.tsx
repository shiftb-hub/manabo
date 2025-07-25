'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'

export default function DashboardPage() {
  useEffect(() => {
    const supabase = createClientComponentClient()

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Client-side session:', session)
    })
  }, [])
  return (
    <main className='p-6'>
      <h1 className='text-2xl font-bold'>ダッシュボード</h1>
    </main>
  )
}
