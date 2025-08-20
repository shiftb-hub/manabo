import type { RankingPeriod } from '../_types/rankingTypes'

export type MotivationMap = Record<RankingPeriod, string>

export const EMPTY_MOTIVATION: MotivationMap = {
  day: '',
  week: '',
  month: '',
}
