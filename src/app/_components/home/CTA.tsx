'use client'

import { Sparkles } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

export const CTA = () => (
  <section className='text-center space-y-6 py-8'>
    <div className='space-y-4'>
      <h3 className='text-2xl font-bold text-gray-900'>今日から学習習慣を始めよう</h3>
      <p className='text-gray-600'>manaboと一緒に、継続する力を身につけませんか？</p>
    </div>

    <div className='space-y-3'>
      <Button className='w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 text-lg font-medium'>
        <Sparkles className='w-5 h-5 mr-2' />
        無料で始める
      </Button>

      <Button
        variant='outline'
        className='w-full border-green-500 text-green-600 hover:bg-green-50 py-3 bg-transparent'
        style={{ borderImage: 'linear-gradient(to right, #10b981, #059669) 1' }}
      >
        機能をもっと見る
      </Button>
    </div>
  </section>
)
