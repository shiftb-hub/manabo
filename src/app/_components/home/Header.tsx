'use client'

import { Button } from '@/app/_components/ui/button'

export const Header = () => (
  <header className='bg-white border-b px-4 py-4'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center'>
          <span className='text-white font-bold text-lg'>M</span>
        </div>
        <h1 className='text-xl font-bold text-gray-900'>manabo</h1>
      </div>
      <Button className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'>
        始める
      </Button>
    </div>
  </header>
)
