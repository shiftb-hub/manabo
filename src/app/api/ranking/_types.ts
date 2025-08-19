export type RankingPeriod = 'day' | 'week' | 'month'

export type UiRankingUser = {
  userId: number
  rank: number
  name: string
  avatar: string | null
  time: number
  change: number
  streak: number
}

export type NowRow = {
  userId: number
  totalTime: number
  user?: { nickName: string; profile: { profilePicture: string | null } | null } | null
}

export type PrevRow = {
  userId: number
  totalTime: number
}

export type DayWindow = {
  nowStartUTC: Date
  nowEndUTC: Date
  prevStartUTC: Date
  prevEndUTC: Date
}

export type WeekWindow = DayWindow

export type MonthWindow = {
  curr: { year: number; month: number; startUTC: Date; endUTC: Date }
  prev: { year: number; month: number; startUTC: Date; endUTC: Date }
}

export type BuildResponse = { items: UiRankingUser[]; currentUser: UiRankingUser | null }
