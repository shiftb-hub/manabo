import { BookOpen } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { STUDY_SUMMARY } from '../_constants'

export const StudySummaryCard = () => {
  return (
    <Card className='mb-6 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
      <CardContent className='p-4'>
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center'>
            <BookOpen className='w-6 h-6 text-white' />
          </div>
          <div>
            <p className='text-sm font-semibold text-emerald-800'>今日の学習記録</p>
            <p className='text-xs font-semibold text-emerald-600'>
              {STUDY_SUMMARY.subject} • {STUDY_SUMMARY.duration} • {STUDY_SUMMARY.streak}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
