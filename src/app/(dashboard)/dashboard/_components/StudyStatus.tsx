import { BookOpen, Clock,  Target, TrendingUp, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Progress } from '@/app/_components/ui/progress'

import { StreakMessage } from './StreakMessage'
import SupportMessage from './SupportMessage'
import { useStreak } from '../_hooks/useStreak'

interface StudyStatusProps {
  todayStudyTime: number
  weeklyStudyTime: number
  weeklyPercentage: number
  weeklyGoal: number
  remaining: number
  matchingGroup: string
  onlineGroupMembers: number
  // currentMessage: string
}

export const StudyStatus = ({
  todayStudyTime,
  weeklyGoal,
  weeklyStudyTime,
  weeklyPercentage,
  remaining,
  matchingGroup,
  onlineGroupMembers,
  // currentMessage,
}: StudyStatusProps) => {
  const { streakCount, isLoading: isStreakLoading } = useStreak()

  return (
    <>
      <Card className='mb-6 bg-gradient-to-r from-green-500 to-emerald-600 border-0 text-white shadow-lg'>
        <CardContent className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-green-100 text-sm'>連続学習日数</p>
              {isStreakLoading ? (
                <div className='text-4xl font-bold mb-2 flex items-center'>
                  <div className='w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2'></div>
                  <span className='text-white/50'>日</span>
                </div>
              ) : (
                <p className='text-4xl font-bold mb-2'>{streakCount}日</p>
              )}
              <div className='flex items-center'>
                <TrendingUp className='w-4 h-4 mr-1' />
                <p className='text-sm text-green-100'>
                  <StreakMessage streakCount={streakCount} isLoading={isStreakLoading}/>
                </p>
              </div>
            </div>
            <div className='w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center'>
              <BookOpen className='w-10 h-10' />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='grid grid-cols-2 gap-4 mb-6'>
        <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
          <CardContent className='p-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center'>
                <Clock className='w-6 h-6 text-green-600' />
              </div>
              <div>
                <p className='text-xs text-gray-600'>今日の学習時間</p>
                <p className='text-xl font-bold text-gray-800'>{todayStudyTime}時間</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
          <CardContent className='p-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center'>
                <Target className='w-6 h-6 text-emerald-600' />
              </div>
              <div>
                <p className='text-xs text-gray-600'>週間目標</p>
                <p className='text-xl font-bold text-gray-800'>{weeklyPercentage}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className='mb-6 bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
        <CardHeader className='pb-3'>
          <CardTitle className='text-lg text-gray-800'>今週の進捗</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            <div className='flex justify-between text-sm'>
              <span className='text-gray-600'>目標達成率</span>
              <span className='font-medium text-gray-800'>
                {weeklyStudyTime}/{weeklyGoal}時間
              </span>
            </div>
            <Progress
              value={weeklyGoal > 0 ? (weeklyStudyTime / weeklyGoal) * 100 : 0}
              className='h-3 bg-green-100 [&>div]:bg-green-600'
            />
            <p className='text-xs text-gray-500'>目標まであと{remaining}時間です</p>
          </div>
        </CardContent>
      </Card>

      {/* AI Motivational Message */}
      <SupportMessage/>
      {/* <Card className='mb-6 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
        <CardContent className='p-4'>
          <div className='flex items-start space-x-3'>
            <div className='w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Sparkles className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-emerald-800'>AIからの応援メッセージ</p>
              <p className='text-sm text-emerald-700 mt-1 leading-relaxed'>{currentMessage}</p>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Matching Group Status */}
      <Card className='mb-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200'>
        <CardContent className='p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center'>
                <Users className='w-5 h-5 text-white' />
              </div>
              <div>
                <p className='text-sm font-medium text-teal-800'>あなたのグループ</p>
                <p className='text-lg font-bold text-teal-700'>{matchingGroup}</p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-sm text-teal-600'>オンライン</p>
              <p className='text-xl font-bold text-teal-700'>{onlineGroupMembers}人</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
