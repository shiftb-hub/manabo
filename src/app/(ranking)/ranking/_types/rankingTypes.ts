export type RankingPeriod = 'day' | 'week' | 'month'

export interface RankingUser {
  rank: number
  name: string
  avatar: string
  time: number
  streak: number
  change: string
  isCurrentUser?: boolean
}
