'use client'

import { Trophy } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { RankingPeriod } from '../_types/rankingTypes'
import { getMotivationMessage } from '../_utils/rankingUtils'

interface MotivationCardProps {
  period: RankingPeriod
}

export function MotivationCard({ period }: MotivationCardProps) {
  return (
    <Card className='bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
      <CardContent className='p-4'>
        <div className='flex items-start space-x-3'>
          <div className='w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0'>
            <Trophy className='w-5 h-5 text-white' />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm font-medium text-emerald-800'>
              頑張っています！
            </p>
            <p className='text-sm text-emerald-700 mt-1'>
              {getMotivationMessage(period)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
