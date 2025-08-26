/**
 * 学習記録の連続日数を計算するユーティリティ関数
 */

import { startOfDay, subDays } from 'date-fns'

import { TZ, TZDate } from '@/app/_utils/tz' // ← ラッパー経由に変更

const normalizeDate = (date: Date): Date => {
  // 日本時間（JST）で日付の開始時刻に正規化
  const jstDate = new TZDate(date, TZ)
  const start = startOfDay(jstDate)
  // UTC の epoch を保持したまま通常の Date に戻す
  return new Date(start.getTime())
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

  // JST の日付で1日ずつ遡るために TZDate を利用
  let currentDate = new TZDate(latestRecordDate, TZ)
  let streakCount = 0

  for (let i = 0; i < uniqueDates.length; i++) {
    if (uniqueDates[i].getTime() === currentDate.getTime()) {
      streakCount++
      currentDate = new TZDate(subDays(currentDate, 1), TZ)
    } else {
      break
    }
  }

  return streakCount
}
