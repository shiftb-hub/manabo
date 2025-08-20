import { Card, CardContent } from '@/app/_components/ui/card'

import { POSTING_TIPS } from '../_constants'

export const TipsCard = () => {
  return (
    <Card className='bg-blue-50 border-blue-200'>
      <CardContent className='p-4'>
        <h3 className='text-sm font-medium text-blue-800 mb-2'>💡 投稿のコツ</h3>
        <ul className='text-xs text-blue-700 space-y-1'>
          {POSTING_TIPS.map((tip, index) => (
            <li key={index}>• {tip.text}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

