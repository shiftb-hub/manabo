import { Brain } from 'lucide-react'
import React from 'react'

import { Button } from '@/app/_components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'

import { StyleType } from '../_types/learningType'
import { Question } from '../_types/question'

interface Props {
  current: Question
  handleAnswer: (type: StyleType) => void
}

export const StyleQuiz: React.FC<Props> = ({ current, handleAnswer }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-green-100 rounded-xl">
      <CardHeader className="pt-2 pb-6">
        <CardTitle className="text-lg flex items-center py-4">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="pl-4 ">Q{current.id} </div>
        </CardTitle>
        <CardDescription className="rounded-xl font-medium mb-4 text-base leading-relaxed  text-gray-700">
          {current.text}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {current.options.map((option) => (
            <Button
              type="button"
              key={option.id}
              onClick={() => handleAnswer(option.type)}
              className="w-full justify-start gap-6 text-left border border-green-300 bg-white rounded-xl px-6 py-7 hover:bg-green-100 transition-colors text-gray-700"
            >
              <div className="flex items-center justify-center bg-green-100 py-1 px-2 aspect-square rounded-full">
                <span className="font-bold text-green-600">{option.id}</span>
              </div>
              {option.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
