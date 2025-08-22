import React from 'react'

import { Progress } from '@/app/_components/ui/progress'

import { Question } from '../_types/question'

interface Props {
  currentIndex: number
  learningStyleQuestions: Question[]
  progress: number
}

export const StyleProgress = ({
  currentIndex,
  learningStyleQuestions,
  progress,
}: Props ) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-green-600">
          質問 {currentIndex + 1} / {learningStyleQuestions.length}
        </span>
        <span className="text-sm text-green-600">
          {progress} %
        </span>
      </div>
      <Progress
        value={progress}
        className="relative overflow-hidden bg-green-100 [&>div]:bg-green-600 rounded-full w-full h-2"
      ></Progress>
    </div>
  )
}
