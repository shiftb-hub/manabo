'use client'

import { TrendingUp } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar'
import { Badge } from '@/app/_components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'

import { RankingPeriod, RankingUser } from '../_types/rankingTypes'
import {
  getChangeColor,
  getPeriodLabel,
  getRankIcon,
} from '../_utils/rankingUtils'

interface RankingListProps {
  users: RankingUser[]
  period: RankingPeriod
}

export function RankingList({ users, period }: RankingListProps) {
  const periodLabel = getPeriodLabel(period)

  return (
    <Card className='mb-6 bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-lg text-gray-800 flex items-center'>
          <TrendingUp className='w-5 h-5 mr-2 text-green-600' />
          学習時間ランキング
          <Badge className='ml-2 bg-green-100 text-green-700'>
            {periodLabel}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {users.map(user => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-3 rounded-xl ${
                user.isCurrentUser
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 flex items-center justify-center'>
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className='w-10 h-10'>
                  <AvatarImage src={`/placeholder.svg?query=${user.avatar}`} />
                  <AvatarFallback
                    className={`text-sm font-medium ${
                      user.isCurrentUser
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      user.isCurrentUser ? 'text-green-800' : 'text-gray-800'
                    }`}
                  >
                    {user.name}
                  </p>
                  <div className='flex items-center space-x-2'>
                    <Badge
                      variant='outline'
                      className='text-xs border-yellow-200 text-yellow-600'
                    >
                      {user.streak}日連続
                    </Badge>
                    <span className={`text-xs ${getChangeColor(user.change)}`}>
                      {user.change !== '0' ? user.change : '→'}
                    </span>
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <p
                  className={`text-lg font-bold ${
                    user.isCurrentUser ? 'text-green-700' : 'text-gray-800'
                  }`}
                >
                  {user.time}h
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
