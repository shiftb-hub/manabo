'use client'
import { Brain } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'
import { Progress } from '@/app/_components/ui/progress'

import { LearningTypeHeader } from '../_components/StyleCheckHeader'
import { learningStyleQuestions } from '../_contents/learningStyleQuestions'

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = learningStyleQuestions[currentIndex]
  const progress = ((currentIndex + 1) / learningStyleQuestions.length) * 100

  const handleAnswer = () => {
    setCurrentIndex((prev) => prev + 1)
  }
  return (
    <>
      <div className="min-h-screen bg-green-50 p-4 flex flex-col items-center">
        <div className="container max-auto px-4 py-3 max-w-md pb-24">
          <LearningTypeHeader />

          {/* 質問番号 + プログレスバー */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-green-600">
                質問 {currentIndex + 1} / {learningStyleQuestions.length}
              </span>
              <span className="text-sm text-green-600">{(currentIndex + 1) * 10} %</span>
            </div>
            <Progress
              value={progress}
              className="relative overflow-hidden bg-green-100 rounded-full w-full h-2"
            ></Progress>
          </div>
          {/* 質問カード */}
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
                {current.options.map((option: { id: string; label: string }) => (
                  <Button
                    key={option.id}
                    onClick={() => handleAnswer()}
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

          <div className="text-center text-green-700 text-sm mt-6">
            あなたに最適な学習スタイルを診断します
            <br />
            直感で答えてください
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
