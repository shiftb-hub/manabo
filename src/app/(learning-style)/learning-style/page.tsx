'use client'
import React from 'react'

import { LearningTypeHeader } from '../_components/StyleCheckHeader'
import { StyleCheckResult } from '../_components/StyleCheckResult'
import { StyleProgress } from '../_components/StyleProgress'
import { StyleQuiz } from '../_components/StyleQuiz'
import { useStyleQuiz } from '../_hooks/useStyleQuiz'

export default function LearningStylePage() {
  const { 
    current, 
    LEARNING_STYLE_QUESTIONS, 
    handleAnswer, 
    currentIndex, 
    progress, 
    showResult, 
    result,
  } = useStyleQuiz()

  return (
    showResult && result ? (
      <StyleCheckResult 
        result={result}
      />
    ) : (
      <div className="min-h-screen bg-green-50 p-4 flex flex-col items-center">
        <div className="container max-auto px-4 py-3 max-w-md pb-24">
          <LearningTypeHeader />
          {/* 質問番号 + プログレスバー */}
          <StyleProgress
            currentIndex={currentIndex}
            learningStyleQuestions={LEARNING_STYLE_QUESTIONS}
            progress={progress}
          />
          {/* 質問カード */}
          <StyleQuiz 
            current={current} 
            handleAnswer={handleAnswer} 
          />
          <div className="text-center text-green-700 text-sm mt-6">
            あなたに最適な学習スタイルを診断します
            <br />
            直感で答えてください
          </div>
        </div>
      </div>
    )
  )
}