'use client'

import { Users } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

export const GroupStudyCard = () => (
  <Card className='bg-teal-50 border border-teal-200'>
    <CardContent className='p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center'>
            <Users className='w-5 h-5 text-white' />
          </div>
          <div>
            <h4 className='font-medium text-gray-900 mb-1'>グループ学習</h4>
            <p className='text-sm text-gray-600'>仲間と一緒に学習を継続</p>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-sm text-teal-600 font-medium'>オンライン</p>
          <p className='text-lg font-bold text-teal-600'>3人</p>
        </div>
      </div>
    </CardContent>
  </Card>
)
