import { Plus, Sparkles, Zap } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

interface ActionButtonProps {
  onNavigate: (path: string) => void
}

export const ActionButton = ({ onNavigate }: ActionButtonProps) => {
  return (
    <div className='space-y-3 mb-6'>
      <Button
        onClick={() => onNavigate('/learning-record')} // 学習投稿機能の実装後に正しいパスを指定する
        className='w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg'
      >
        <Plus className='w-5 h-5 mr-2' />
        学習記録を入力
      </Button>

      <Button
        // onClick={() => onNavigate("SNS投稿の遷移先を指定")}
        variant='outline'
        className='w-full border-green-200 text-green-700 hover:bg-green-50 py-6 rounded-2xl'
      >
        <Sparkles className='w-5 h-5 mr-2' />
        AI投稿文を生成
      </Button>

      <Button
        // onClick={() => onNavigate("勉強しない？のページに遷移するためのパスを指定")}
        className='w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg'
      >
        <Zap className='w-5 h-5 mr-2' />
        勉強しない？
      </Button>
    </div>
  )
}
