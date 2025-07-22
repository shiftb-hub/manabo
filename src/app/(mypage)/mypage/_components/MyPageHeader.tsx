'use client'

import { LogOut, Settings } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

interface MyPageHeaderProps {
  onNavigate: (screen: string) => void
  onLogout: () => void
}

export const MyPageHeader = ({ onNavigate, onLogout }: MyPageHeaderProps) => {
  return (
    <div className='flex items-center justify-between mb-6'>
      <h1 className='text-xl font-bold text-gray-800'>マイページ</h1>
      <div className='flex items-center space-x-2'>
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='text-gray-400'
          onClick={() => onNavigate('settings')}
        >
          <Settings className='w-5 h-5' />
        </Button>
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='text-red-400 hover:text-red-600 hover:bg-red-50'
          onClick={onLogout}
        >
          <LogOut className='w-5 h-5' />
        </Button>
      </div>
    </div>
  )
}
