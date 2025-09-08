'use client'

import { ManaboIcon } from '@/app/_components/manabo-icon'

export const NavigatorHeader = () => {
  return (
    <div className='flex items-center justify-center mb-6 sm:mb-8'>
      <div className='text-center'>
        <ManaboIcon size='lg' className='ml-auto mt-8 mb-3 mr-8 sm:mb-4' />
        <p className='text-gray-600 text-xs sm:text-sm'>画面ナビゲーター</p>
      </div>
    </div>
  )
}
