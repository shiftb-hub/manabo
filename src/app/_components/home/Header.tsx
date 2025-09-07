'use client'

import { Button } from '@/app/_components/ui/button'

import { ManaboIcon } from '../manabo-icon'

export const Header = () => (
  <header className='bg-white border-b px-4 py-4'>
    <div className='flex items-center justify-between'>
      <ManaboIcon size='lg' className='max-w-32 mr-3' />
      <Button className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'>
        始める
      </Button>
    </div>
  </header>
)
