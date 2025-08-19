export type ApiRankingUser = {
  userId: number
  rank: number
  name: string
  avatar: string | null
  time: number // 分
  change: number // +上昇 / -下降 / 0
  streak: number
}

export type RankingApiResponse = {
  items: ApiRankingUser[]
  currentUser: ApiRankingUser | null
}
