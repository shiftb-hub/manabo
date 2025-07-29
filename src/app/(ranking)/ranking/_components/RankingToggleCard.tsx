'use client'

import { Trophy } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'
import { Switch } from '@/app/_components/ui/switch'

interface RankingToggleCardProps {
  checked: boolean
  onToggle: (checked: boolean) => void
}

export function RankingToggleCard({
  checked,
  onToggle,
}: RankingToggleCardProps) {
  return (
    <Card className='mb-6 bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center'>
              <Trophy className='w-5 h-5 text-yellow-600' />
            </div>
            <div>
              <p className='text-sm font-medium text-gray-800'>
                ランキング表示
              </p>
              <p className='text-xs text-gray-500'>
                他のユーザーとの比較を表示
              </p>
            </div>
          </div>
          <Switch checked={checked} onCheckedChange={onToggle} />
        </div>
      </CardContent>
    </Card>
  )
}
