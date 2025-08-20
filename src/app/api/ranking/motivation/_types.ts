// src/app/api/ranking/motivation/_types.ts
export type Period = 'day' | 'week' | 'month'
export type Trend = '上昇' | '下降' | 'キープ'

export type ApiUiRankingUser = {
  userId: number
  rank: number
  name: string
  avatar: string | null
  time: number // 分
  change: number // +上昇 / -下降 / 0
  streak: number
}

export type RankingApiResponse = {
  items: ApiUiRankingUser[]
  currentUser: ApiUiRankingUser | null
}

export type MotivationMap = {
  day: string
  week: string
  month: string
}

export type LlmCtx =
  | { hasData: false; label: string }
  | {
      hasData: true
      label: string
      rank: number
      hours: number
      trend: Trend
      streak: number
    }
