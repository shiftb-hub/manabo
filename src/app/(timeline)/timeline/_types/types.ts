// src/app/(timeline)/timeline/_types/types.ts
export type TimelinePost = {
  id: number | string
  user: {
    name: string
    avatar: string
    studyStreak: number
    learningStyle: string
  }
  category: string
  time: number
  content: string
  timestamp: string
  likes: number
  comments: number
  isFollowing: boolean
}

export type TimelineResponse = { items: TimelinePost[] }
