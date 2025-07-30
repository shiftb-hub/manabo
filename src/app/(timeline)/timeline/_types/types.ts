export interface TimelinePost {
  id: number
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
