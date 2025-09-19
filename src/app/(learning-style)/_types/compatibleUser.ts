import { StyleType } from './learningType'

export interface CompatibleUser {
  id: number
  nickName: string
  userLearningStyle: {
    learningStyle: {
      type: StyleType
      name: string
      icon: string
    }
  },
  profile: {
    profilePicture: string | null
  }
}