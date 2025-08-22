import { MessageCircle, TrendingUp, Users } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

interface SummaryBoardProps {
  weeklyDaysCount: number
  followingCount: number
  newNotificationsCount: number
}

export const SummaryBoard = ({
  weeklyDaysCount,
  followingCount,
  newNotificationsCount,
}: SummaryBoardProps) => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
        <CardContent className='p-3 text-center'>
          <div className='w-8 h-8 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-2'>
            <TrendingUp className='w-4 h-4 text-lime-600' />
          </div>
          <p className='text-lg font-bold text-gray-800'>{weeklyDaysCount}</p>
          <p className='text-xs text-gray-600'>今週の日数</p>
        </CardContent>
      </Card>

      <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
        <CardContent className='p-3 text-center'>
          <div className='w-8 h-8 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-2'>
            <Users className='w-4 h-4 text-teal-600' />
          </div>
          <p className='text-lg font-bold text-gray-800'>{followingCount}</p>
          <p className='text-xs text-gray-600'>フォロー中</p>
        </CardContent>
      </Card>

      <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
        <CardContent className='p-3 text-center'>
          <div className='w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2'>
            <MessageCircle className='w-4 h-4 text-emerald-600' />
          </div>
          <p className='text-lg font-bold text-gray-800'>{newNotificationsCount}</p>
          <p className='text-xs text-gray-600'>新着通知</p>
        </CardContent>
      </Card>
    </div>
  )
}
