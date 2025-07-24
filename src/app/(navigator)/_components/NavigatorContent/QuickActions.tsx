'use client'

import { Home, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'

export const QuickActions = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mb-6'>
      <Link href='/' className='block'>
        <Button className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl shadow-lg w-full'>
          <Sparkles className='w-4 h-4 mr-2' />
          機能紹介
        </Button>
      </Link>
      <Link href='/dashboard' className='block'>
        <Button
          variant='outline'
          className='border-green-200 text-green-700 hover:bg-green-50 py-4 rounded-2xl w-full'
        >
          <Home className='w-4 h-4 mr-2' />
          ダッシュボード
        </Button>
      </Link>
    </div>
  )
}
