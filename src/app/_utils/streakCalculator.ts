/**
 * 学習記録の連続日数を計算するユーティリティ関数
 */

import { TZDate } from '@date-fns/tz'
import { startOfDay, subDays } from 'date-fns'

const normalizeDate = (date: Date): Date => {
  // 日本時間（JST）で日付の開始時刻に正規化
  const jstDate = new TZDate(date, 'Asia/Tokyo')
  return startOfDay(jstDate)
}

const deduplicateAndSortDates = (dates: Date[]): Date[] => {
  const normalizedDates = dates.map(normalizeDate)
  const uniqueDates = Array.from(new Set(normalizedDates.map((d) => d.getTime())))
    .map((time) => new Date(time))
    .sort((a, b) => b.getTime() - a.getTime())

  return uniqueDates
}

/**
 * 学習記録の日付から連続学習日数を計算する
 * 今日の記録がなくても、昨日まで連続していればストリークを継続する
 * 途中で学習記録が途切れた場合は0を返す
 */
export const calculateStreak = (learningDates: Date[]): number => {
  if (learningDates.length === 0) return 0

  const uniqueDates = deduplicateAndSortDates(learningDates)
  const today = normalizeDate(new Date())
  const latestRecordDate = uniqueDates[0]

  const daysDiff = Math.floor(
    (today.getTime() - latestRecordDate.getTime()) / (1000 * 60 * 60 * 24),
  )
  if (daysDiff > 1) return 0

  let currentDate = new TZDate(latestRecordDate, 'Asia/Tokyo')
  let streakCount = 0

  for (let i = 0; i < uniqueDates.length; i++) {
    if (uniqueDates[i].getTime() === currentDate.getTime()) {
      streakCount++
      currentDate = new TZDate(subDays(currentDate, 1), 'Asia/Tokyo')
    } else {
      break
    }
  }

  return streakCount
}
