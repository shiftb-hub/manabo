'use client'

import { BookOpen, Clock, Target, TrendingUp } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { GroupStudyCard } from './GroupStudyCard'

export const FeatureCards = () => (
  <section className='space-y-6'>
    <h3 className='text-2xl font-bold text-gray-900 text-center'>主な機能</h3>

    <div className='space-y-4'>
      <Card className='bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0'>
        <CardContent className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-lg font-semibold mb-2'>連続学習記録</h4>
              <p className='text-green-100 text-sm mb-3'>毎日の学習を記録して継続力を可視化</p>
              <div className='flex items-center text-green-100 text-sm'>
                <TrendingUp className='w-4 h-4 mr-1' />
                19日連続達成中！
              </div>
            </div>
            <div className='w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-500 rounded-2xl flex items-center justify-center'>
              <BookOpen className='w-8 h-8 text-white' />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='grid grid-cols-2 gap-4'>
        <Card className='bg-white border-0'>
          <CardContent className='p-4'>
            <div className='flex items-center mb-3'>
              <Clock className='w-6 h-6 text-green-500 mr-2' />
              <span className='font-medium text-gray-900'>学習時間管理</span>
            </div>
            <p className='text-sm text-gray-600'>日々の学習時間を記録して目標達成をサポート</p>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className='p-4'>
            <div className='flex items-center mb-3'>
              <Target className='w-6 h-6 text-green-500 mr-2' />
              <span className='font-medium text-gray-900'>目標設定</span>
            </div>
            <p className='text-sm text-gray-600'>週間・月間目標を設定して進捗を追跡</p>
          </CardContent>
        </Card>
      </div>

      <Card className='bg-green-50 border border-green-200'>
        <CardContent className='p-4'>
          <div className='flex items-start space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
                <path d='M12 3v18M3 12h18' stroke='white' strokeWidth='2' strokeLinecap='round' />
              </svg>
            </div>
            <div>
              <h4 className='font-medium text-gray-900 mb-1'>AI応援メッセージ</h4>
              <p className='text-sm text-gray-700'>
                あなたの学習状況に合わせたパーソナライズされた応援メッセージ
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <GroupStudyCard />
    </div>
  </section>
)
