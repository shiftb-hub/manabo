'use client'

import { BookOpen } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { useStudySummary } from '../_hooks/useStudySummary'

export const StudySummaryCard = () => {
  const { studySummary, isLoading, error } = useStudySummary()

  if (isLoading) {
    return (
      <Card className='mb-6 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
        <CardContent className='p-4'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center animate-pulse'>
              <BookOpen className='w-6 h-6 text-white' />
            </div>
            <div>
              <p className='text-sm font-semibold text-emerald-800'>今日の学習記録</p>
              <p className='text-xs font-semibold text-emerald-600'>読み込み中...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !studySummary) {
    return (
      <Card className='mb-6 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
        <CardContent className='p-4'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center'>
              <BookOpen className='w-6 h-6 text-white' />
            </div>
            <div>
              <p className='text-sm font-semibold text-emerald-800'>今日の学習記録</p>
              <p className='text-xs font-semibold text-emerald-600'>データを取得できませんでした</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='mb-6 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
      <CardContent className='p-4'>
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center'>
            <BookOpen className='w-6 h-6 text-white' />
          </div>
          <div>
            <p className='text-sm font-semibold text-emerald-800'>今日の学習記録</p>
            <p className='text-xs font-semibold text-emerald-600'>
              {studySummary.subject} • {studySummary.duration} • 継続{studySummary.streak}日目
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
