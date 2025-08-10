import { useState } from 'react'

import { learningStyleQuestions } from '../_constants/learningStyleQuestions'

export const useStyleQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = learningStyleQuestions[currentIndex]
  const progress = (currentIndex/ (learningStyleQuestions.length)) * 100

  const handleAnswer = () => {
    setCurrentIndex((prev) => prev + 1)
  }
  return { currentIndex, current,progress,learningStyleQuestions,handleAnswer }
}
