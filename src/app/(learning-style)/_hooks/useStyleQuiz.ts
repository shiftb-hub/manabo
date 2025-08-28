import { useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '@/app/_utils/api'

import { LEARNING_STYLE_QUESTIONS } from '../_constants/learning-style-questions'
import { LEARNING_TYPES } from '../_constants/learning-style-type'
import { LearningStyleRequest } from '../_types/learningStyleRequest'
import { LearningStyleResponse } from '../_types/learningStyleResponse'
import { StyleType } from '../_types/learningType'
import { LearningTypeResult } from '../_types/learningTypeResult'

export const useStyleQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = LEARNING_STYLE_QUESTIONS[currentIndex]
  const progress = ((currentIndex + 1) / (LEARNING_STYLE_QUESTIONS.length)) * 100
  const [answers, setAnswers] = useState<StyleType[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<LearningTypeResult | null>(null)

  const handleAnswer = async(type: StyleType) => {
    // 選んだ選択肢のtypeを取得して、回答リストに追加する。
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    // 現在の問題番号が問題数のindex番号よりも少ない場合はcurrentIndexに+1、そうでなければスタイル診断処理を行う
    if (currentIndex < LEARNING_STYLE_QUESTIONS.length - 1) {
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

      const finalResult = LEARNING_TYPES[maxType]
      setResult(finalResult)
      setShowResult(true)

      void saveResult(finalResult.type)
    }
  }

  const resetResult = () => {
    setCurrentIndex(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  const saveResult = async(type: StyleType) => {
    try { 
      if (!type) { 
        toast.error('診断結果の取得ができませんでした。') 
        return 
      }
      const requestBody:LearningStyleRequest = { type }
      // 10問設問に解答した後は自動でPOSTリクエストを送る。
      await api.post<LearningStyleResponse, LearningStyleRequest>(
        'api/learning-styles', 
        requestBody,
      ) 
    } catch(error) { 
      if(error instanceof Error) { 
        toast.error(`診断結果の保存に失敗しました。`) 
      } else { 
        toast.error(`予期せぬエラーが発生しました。もう一度やり直してください。`) } 
    } 
  }
  
  return {
    currentIndex, 
    current, 
    progress, 
    LEARNING_STYLE_QUESTIONS, 
    answers, 
    showResult, 
    result, 
    handleAnswer,
    resetResult,
  }
}
