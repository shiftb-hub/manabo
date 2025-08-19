export interface LearningType {
  type: 'forest' | 'meadow' | 'bamboo'
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