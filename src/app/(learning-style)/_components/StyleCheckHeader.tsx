import { ArrowLeft } from 'lucide-react'
import React from 'react'

import { Button } from '@/app/_components/ui/button'

export const LearningTypeHeader = () => {
  return (
    <div className="flex items-center mb-6">
      <Button className="w-fit pl-0.5 bg-transparent text-green-600 hover:bg-transparent hover:text-green-800">
        <ArrowLeft className="w-8 h-8" />
        戻る
      </Button>
      <h1 className="w-8/12 text-center text-lg font-bold text-green-700">学習スタイル診断</h1>
    </div>
  )
}
