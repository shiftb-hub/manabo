'use client'

import { Star } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

type Testimonial = {
  name: string
  badge: string
  color: string
  comment: string
}

const data: Testimonial[] = [
  {
    name: '大学生 Aさん',
    badge: 'A',
    color: 'bg-blue-500',
    comment: '「AIからの応援メッセージが本当に励みになります。30日連続で勉強を続けられました！」',
  },
  {
    name: '社会人 Bさん',
    badge: 'B',
    color: 'bg-purple-500',
    comment:
      '「グループ機能で仲間と一緒に頑張れるのが良いです。一人だと続かなかった学習が習慣になりました。」',
  },
]

export const Testimonials = () => (
  <section className='space-y-6'>
    <h3 className='text-2xl font-bold text-gray-900 text-center'>利用者の声</h3>
    <div className='space-y-4'>
      {data.map((t, i) => (
        <Card className='bg-white border-0' key={i}>
          <CardContent className='p-6'>
            <div className='flex items-start space-x-3'>
              <div
                className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <span className='text-white font-bold text-sm'>{t.badge}</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center mb-2'>
                  <span className='font-medium text-gray-900 mr-2'>{t.name}</span>
                  <div className='flex'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                    ))}
                  </div>
                </div>
                <p className='text-sm text-gray-700'>{t.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)
