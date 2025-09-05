import { Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { POSTING_TIPS } from '../_constants'

export const TipsCard = () => {
  return (
    <Card className='bg-gradient-to-br from-green-50/70 to-emerald-50/70 backdrop-blur-sm border-green-200 rounded-xl shadow-sm'>
      <CardContent className='p-4'>
        <div className='flex items-center mb-3'>
          <div className='w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center mr-3'>
            <Sparkles className='w-4 h-4 text-white' />
          </div>
          <h3 className='text-sm font-semibold text-green-800'>投稿のコツ</h3>
        </div>
        <ul className='text-xs text-green-700 space-y-2 ml-11'>
          {POSTING_TIPS.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='text-emerald-500 mr-2'>•</span>
              <span className='text-sm font-medium text-emerald-600'>{tip.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
