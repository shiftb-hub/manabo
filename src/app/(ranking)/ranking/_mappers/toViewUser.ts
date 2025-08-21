import type { ApiRankingUser } from '../_types/rankingApiTypes'
import type { RankingUser } from '../_types/rankingTypes'
import { formatChange, minutesToHours1dp } from '../_utils/rankingFormat'

export const toViewUser = (u: ApiRankingUser): RankingUser => {
  const initialsFallback = u.name?.[0] ?? 'U'
  return {
    rank: u.rank,
    name: u.name,
    avatar: u.avatar ?? initialsFallback,
    time: minutesToHours1dp(u.time),
    streak: u.streak,
    change: formatChange(u.change),
  }
}
