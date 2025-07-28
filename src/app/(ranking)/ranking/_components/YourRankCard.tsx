'use client'

import { Card, CardContent } from '@/app/_components/ui/card'

import { RankingUser } from '../_types/rankingTypes'
import { getRankIcon } from '../_utils/rankingUtils'

interface YourRankCardProps {
  user: RankingUser
}

export function YourRankCard({ user }: YourRankCardProps) {
  return (
    <Card className='mb-6 bg-gradient-to-r from-green-500 to-emerald-600 border-0 text-white shadow-lg'>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
              {getRankIcon(user.rank)}
            </div>
            <div>
              <p className='text-green-100 text-sm'>あなたの順位</p>
              <p className='text-2xl font-bold'>{user.rank}位</p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-green-100 text-sm'>学習時間</p>
            <p className='text-xl font-bold'>{user.time}h</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
