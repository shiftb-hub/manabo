'use client'

import { Trophy } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { useMotivation } from '../_hooks/useMotivation'
import type { RankingPeriod } from '../_types/rankingTypes'

type Props = { period: RankingPeriod }

export function MotivationCard({ period }: Props) {
  // ← messages を取り出さない
  const { getMessage, loading, error } = useMotivation()
  const text = getMessage(period)

  return (
    <Card className='bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
      <CardContent className='p-4'>
        <div className='flex items-start space-x-3'>
          <div className='w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0'>
            <Trophy className='w-5 h-5 text-white' />
          </div>

          <div className='flex flex-col'>
            <p className='text-sm font-medium text-emerald-800'>頑張っています！</p>

            {loading && <p className='text-sm text-emerald-700 mt-1'>応援メッセージを作成中...</p>}

            {!loading && error && <p className='text-sm text-red-600 mt-1'>{error}</p>}

            {!loading && !error && (
              <p className='text-sm text-emerald-700 mt-1'>{text || 'メッセージがありません'}</p>
            )}

            {/* デバッグで全体を見たいときは下のパターンBを使ってください */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
