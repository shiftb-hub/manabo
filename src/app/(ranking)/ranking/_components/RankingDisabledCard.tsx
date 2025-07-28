import { Trophy } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'

interface RankingDisabledCardProps {
  onShow: () => void
}

export function RankingDisabledCard({ onShow }: RankingDisabledCardProps) {
  return (
    <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardContent className='p-8 text-center'>
        <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <Trophy className='w-8 h-8 text-gray-400' />
        </div>
        <p className='text-gray-600 mb-2'>ランキング表示がオフになっています</p>
        <p className='text-sm text-gray-500 mb-4'>
          他のユーザーとの比較を見るには、上のスイッチをオンにしてください
        </p>
        <Button
          type='button'
          onClick={onShow}
          variant='outline'
          className='border-green-200 text-green-700 hover:bg-green-50'
        >
          ランキングを表示
        </Button>
      </CardContent>
    </Card>
  )
}
