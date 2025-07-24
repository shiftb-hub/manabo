'use client'

import { ArrowLeft } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

interface RankingHeaderProps {
  onBack: () => void
}

export function RankingHeader({ onBack }: RankingHeaderProps) {
  return (
    <div className='flex items-center mb-6'>
      <Button
        type='button'
        variant='ghost'
        size='sm'
        onClick={onBack}
        className='mr-3 p-2'
      >
        <ArrowLeft className='w-5 h-5' />
      </Button>
      <h1 className='text-xl font-bold text-gray-800'>ランキング</h1>
    </div>
  )
}
