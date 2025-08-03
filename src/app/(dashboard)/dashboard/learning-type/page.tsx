'use client'
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import { Progress } from '@/app/_components/ui/progress'

import { learningTypeQuestions } from './_constants/learningTypeQuestions'

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = learningTypeQuestions[currentIndex]
  const progress = ((currentIndex + 1) / learningTypeQuestions.length) * 100

  const handleAnswer = () => {
    setCurrentIndex((prev) => prev + 1)
  }
  return (
    <>
      <div className="min-h-screen bg-green-50 p-4 flex flex-col items-center">
        <div className="container max-auto px-4 py-6 max-w-md pb-24">
          <Button className=" bg-transparent text-green-600 hover:bg-transparent hover:text-green-800">
            <ArrowLeft className="w-8 h-8" />
            戻る
          </Button>
          <h1 className="text-center text-xl font-bold text-green-700 mb-4">学習スタイル診断</h1>

          {/* 質問番号 + プログレスバー */}
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">
              質問 {currentIndex + 1} / {learningTypeQuestions.length}
            </div>
            <Progress
              value={progress}
              className="relative overflow-hidden bg-gray-200 rounded-full w-full h-2"
            ></Progress>
          </div>

          {/* 質問カード */}
          <div className="bg-white rounded-xl p-5 shadow">
            <div className="text-green-600 font-bold mb-2">Q{current.id}</div>
            <p className="text-gray-800 font-medium mb-4">{current.text}</p>

            <div className="space-y-3">
              {current.options.map((options) => (
                <button
                  key={options.id}
                  onClick={() => handleAnswer()}
                  className="w-full text-left border border-gray-300 rounded-lg py-3 px-4 hover:bg-green-100 transition-colors"
                >
                  <span className="font-bold text-green-600 mr-2">{options.id}</span>
                  {options.label}
                </button>
              ))}
            </div>
          </div>

          {/* ika huyou */}
          <div className="bg-white rounded-xl p-5 shadow">
            <div className="text-green-600 font-bold mb-2">Q{current.id}</div>
            <p className="text-gray-800 font-medium mb-4">{current.text}</p>

            <div className="space-y-3">
              {current.options.map((options) => (
                <button
                  key={options.id}
                  onClick={() => handleAnswer()}
                  className="w-full text-left border border-gray-300 rounded-lg py-3 px-4 hover:bg-green-100 transition-colors"
                >
                  <span className="font-bold text-green-600 mr-2">{options.id}</span>
                  {options.label}
                </button>
              ))}
            </div>
          </div>
          {/* huyoukokomade */}

          {/* 補足文 */}
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
