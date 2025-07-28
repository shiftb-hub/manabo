'use client'

import { ManaboIcon } from '@/app/_components/manabo-icon'

export const NavigatorHeader = () => {
  return (
    <div className='flex items-center justify-center mb-6 sm:mb-8'>
      <div className='text-center'>
        <ManaboIcon size='lg' className='mx-auto mb-3 sm:mb-4' />
        <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2'>
          Manabo
        </h1>
        <p className='text-gray-600 text-xs sm:text-sm'>画面ナビゲーター</p>
      </div>
    </div>
  )
}
