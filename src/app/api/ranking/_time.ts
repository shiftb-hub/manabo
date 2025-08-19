import { addDays, addMonths, addWeeks, startOfDay, startOfMonth, startOfWeek } from 'date-fns'
import { fromZonedTime, toZonedTime } from 'date-fns-tz'

import type { DayWindow, MonthWindow, WeekWindow } from './_types'

/**
 * JST（Asia/Tokyo）を date-fns(-tz) で扱う実装（v3対応）。
 * すべて UTC を基準に計算し、JST の日/週/月の境界を UTC 時刻として返します。
 * 半開区間 [start, end) 前提。
 */
const TZ = 'Asia/Tokyo' as const

/** JST の「その日の 00:00(JST)」を UTC へ変換して返す */
function jstStartOfDayUTC(base: Date): Date {
  // 1) base(UTC) -> JSTの壁時計
  const jstWall = toZonedTime(base, TZ)
  // 2) JST壁時計で日付の 00:00 に正規化（date-fns）
  const jstMidnight = startOfDay(jstWall)
  // 3) JST壁時計の 00:00 を UTC に戻す
  return fromZonedTime(jstMidnight, TZ)
}

/** JST の 1日区間（本日/前日）を UTC で返す。半開区間 [start, end) */
export function jstDayRange(base: Date = new Date()): DayWindow {
  const start = jstStartOfDayUTC(base) // 今日(JST) 00:00 in UTC
  const end = addDays(start, 1) // 明日(JST) 00:00 in UTC
  const prevStart = addDays(start, -1) // 昨日(JST) 00:00 in UTC

  return {
    nowStartUTC: start,
    nowEndUTC: end,
    prevStartUTC: prevStart,
    prevEndUTC: start,
  }
}

/**
 * JST の週区間（Sun-Sat）を UTC で返す。半開区間 [日曜00:00, 翌週日曜00:00)
 * 週頭は日曜固定（weekStartsOn: 0）。
 */
export function jstWeekRange(base: Date = new Date()): WeekWindow {
  // base を JST 壁時計にして週頭（日曜）を算出
  const jstWall = toZonedTime(base, TZ)
  const jstWeekStartWall = startOfWeek(jstWall, { weekStartsOn: 0 })
  // 週頭(JST)と翌週頭(JST)を UTC へ
  const weekStartUTC = fromZonedTime(jstWeekStartWall, TZ)
  const weekEndUTC = addWeeks(weekStartUTC, 1)
  const prevWeekStartUTC = addWeeks(weekStartUTC, -1)

  return {
    nowStartUTC: weekStartUTC,
    nowEndUTC: weekEndUTC,
    prevStartUTC: prevWeekStartUTC,
    prevEndUTC: weekStartUTC,
  }
}

/** JST の月情報（year/month と開始/終了 UTC）を返す */
export function jstMonthInfo(base: Date = new Date()): MonthWindow {
  // base を JST 壁時計に変換して当月1日(JST)を取得
  const jstWall = toZonedTime(base, TZ)
  const jstCurrStartWall = startOfMonth(jstWall)
  const jstNextStartWall = addMonths(jstCurrStartWall, 1)
  const jstPrevStartWall = addMonths(jstCurrStartWall, -1)

  // 各境界を UTC に戻す
  const currStartUTC = fromZonedTime(jstCurrStartWall, TZ)
  const nextStartUTC = fromZonedTime(jstNextStartWall, TZ)
  const prevStartUTC = fromZonedTime(jstPrevStartWall, TZ)

  return {
    curr: {
      year: jstCurrStartWall.getFullYear(),
      month: jstCurrStartWall.getMonth() + 1, // 1-12
      startUTC: currStartUTC,
      endUTC: nextStartUTC,
    },
    prev: {
      year: jstPrevStartWall.getFullYear(),
      month: jstPrevStartWall.getMonth() + 1,
      startUTC: prevStartUTC,
      endUTC: currStartUTC,
    },
  }
}
