// /types/api/timeline.ts
export type TimelinePost = {
  id: number | string
  user: {
    name: string
    avatar: string
    studyStreak: number
    learningStyle: string
    isFollowing: boolean
  }
  category: string
  time: number // h（小数1桁）
  content: string
  hashtags: string[] // 追加：#タグ抽出結果
  timestamp: string // '2時間前' 等
  likes: number // TODO: 実データに合わせて
  comments: number // TODO: 実データに合わせて
}

export type TimelineResponse = {
  items: TimelinePost[]
}
