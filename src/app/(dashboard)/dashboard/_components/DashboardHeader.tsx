import { Settings } from 'lucide-react'
import React from 'react'

import { ManaboIcon } from '@/app/_components/manabo-icon'
import { Button } from '@/app/_components/ui/button'

interface Props {
  user: {
    nickName?: string
  } | null
}

export const DashboardHeader: React.FC<Props> = ({ user }) => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center space-x-3'>
        <ManaboIcon size='md' />
        <div>
          <h1 className='text-xl font-bold text-gray-800'>
            {user && `おはよう、${user.nickName}さん！`}
          </h1>
          <p className='text-sm text-gray-600'>今日も学習を頑張りましょう</p>
        </div>
      </div>
      <Button variant='ghost' size='sm' className='text-gray-400'>
        <Settings className='w-5 h-5' />
      </Button>
    </div>
  )
}
