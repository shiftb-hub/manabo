import { StyleType } from './learningType'

export interface LearningStyleLists {
  type: StyleType
  name: string
  icon: string
  description: string
  characteristics: string[]
  recommendations: string[]
}