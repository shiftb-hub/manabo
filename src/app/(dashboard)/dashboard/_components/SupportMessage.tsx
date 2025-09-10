import { Sparkles } from 'lucide-react'
import React from 'react'
import useSWR from 'swr'

import { Card, CardContent } from '@/app/_components/ui/card'
import { fetcher } from '@/app/_utils/fetcher'


const SupportMessage = () => {
  const{data, error, isLoading} = useSWR<{ message: string }>(
  '/api/dashboard/support-message',
  fetcher,
  {
    revalidateOnFocus: false,  // フォーカス時に再取得しない
    refreshInterval: 0,        // 自動リフレッシュなし
  }
)
  
  const message = isLoading
    ? 'AIがメッセージを考え中...'
    : error
    ? 'メッセージの取得に失敗しました'
    :  data?.message ?? '今日も素晴らしい一日にしましょう！継続は力なりです。'
  return (
      
      <Card className='mb-6 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
        <CardContent className='p-4'>
          <div className='flex items-start space-x-3'>
            <div className='w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Sparkles className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-emerald-800'>AIからの応援メッセージ</p>
              <p className='text-sm text-emerald-700 mt-1 leading-relaxed'>{message}</p>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}

export default SupportMessage