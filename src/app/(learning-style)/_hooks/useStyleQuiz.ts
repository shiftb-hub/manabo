import { useState } from 'react'

import { learningStyleQuestions } from '../_constants/learningStyleQuestions'
import { learningTypes } from '../_constants/learningStyleType'
import { LearningType } from '../_types/learningType'

type StyleType = 'forest' | 'meadow' | 'bamboo'

export const useStyleQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = learningStyleQuestions[currentIndex]
  const progress = (currentIndex/ (learningStyleQuestions.length)) * 100
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<LearningType | null>(null)

  const handleAnswer = (type: string) => {
    // 選んだ選択肢のtypeを取得して、回答リストに追加する。
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    // 現在の問題番号が10よりも少ない場合)はcurrentIndexに+1、そうでなければスタイル診断処理を行う
    if (current.id < learningStyleQuestions.length) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // answersの中から「forest, meadow, bamboo」の数をそれぞれカウントする
      const counts: Record<StyleType, number> = { forest: 0, meadow: 0, bamboo: 0 }
      newAnswers.forEach((answer) => {
        counts[answer as keyof typeof counts]++
      })

      // 「forest, meadow, bamboo」の中から最大値を返す
      const maxType = (Object.keys(counts) as StyleType[]).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      )

      setResult(learningTypes[maxType])
      setShowResult(true)
    }
  }
  return {
    currentIndex, 
    current, 
    progress, 
    learningStyleQuestions, 
    answers, 
    showResult, 
    result, 
    handleAnswer
  }
}
