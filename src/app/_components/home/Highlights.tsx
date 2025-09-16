'use client'

import { CheckCircle } from 'lucide-react'

const items = [
  { title: '完全無料', desc: 'すべての機能を無料でご利用いただけます' },
  { title: 'シンプルな操作', desc: '直感的なデザインで誰でも簡単に使えます' },
  { title: 'データ同期', desc: '複数デバイス間で学習記録を同期できます' },
]

export const Highlights = () => (
  <section className='space-y-6'>
    <h3 className='text-2xl font-bold text-gray-900 text-center'>manaboの特徴</h3>
    <div className='space-y-4'>
      {items.map((v) => (
        <div key={v.title} className='flex items-start space-x-4'>
          <div className='w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
            <CheckCircle className='w-5 h-5 text-green-600' />
          </div>
          <div>
            <h4 className='font-medium text-gray-900 mb-1'>{v.title}</h4>
            <p className='text-sm text-gray-600'>{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
