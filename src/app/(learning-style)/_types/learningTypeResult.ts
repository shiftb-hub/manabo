import { StyleType } from './learningType'

export interface LearningTypeResult {
  type: StyleType
  name: string
  icon: string
  description: string
  characteristics: string[]
  recommendations: string[]
  compatibleUsers: {
    name: string
    level: string
    studyTime: string
  }[]
}