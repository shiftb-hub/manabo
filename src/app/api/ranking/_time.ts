import type { DayWindow, MonthWindow, WeekWindow } from './_types'

/**
 * JST（UTC+9）を“算術”で扱う実装。
 * すべて UTC を基準に計算し、JST の日/週/月の境界を UTC 時刻として返します。
 * 半開区間 [start, end) を前提にしています。
 */

const DAY_MS = 86_400_000
const JST_OFFSET_MS = 9 * 60 * 60 * 1000

/**
 * 与えられた日時が属する「JST のその日の 00:00」を UTC 時刻で返す
 * 例: 2025-08-16T12:34Z（UTC） -> JST の 2025-08-16 00:00 を UTC に戻した時刻
 */
function jstMidnightUTC(base: Date): Date {
  // base(UTC) を JST に 9時間進める（壁時計）
  const jst = new Date(base.getTime() + JST_OFFSET_MS)
  const y = jst.getUTCFullYear()
  const m = jst.getUTCMonth()
  const d = jst.getUTCDate()
  // JST の y/m/d 00:00 を UTC に戻す（9時間引く）
  return new Date(Date.UTC(y, m, d) - JST_OFFSET_MS)
}

/** JST の 1日区間（本日/前日）を UTC で返す。半開区間 [start, end) */
export function jstDayRange(base: Date = new Date()): DayWindow {
  const start = jstMidnightUTC(base) // 今日(JST) 00:00 in UTC
  const end = new Date(start.getTime() + DAY_MS) // 明日(JST) 00:00 in UTC
  const prevStart = new Date(start.getTime() - DAY_MS) // 昨日(JST) 00:00 in UTC

  return {
    nowStartUTC: start,
    nowEndUTC: end,
    prevStartUTC: prevStart,
    prevEndUTC: start,
  }
}

/**
 * JST の週区間（Sun-Sat）を UTC で返す。半開区間 [日曜00:00, 翌週日曜00:00)
 * 週の起点は「日曜始まり」で固定。
 */
export function jstWeekRange(base: Date = new Date()): WeekWindow {
  // 今日(JST)の00:00(UTC)
  const todayStartUTC = jstMidnightUTC(base)

  // 曜日を JST の壁時計で取得（0=Sun..6=Sat）
  const jstWallClock = new Date(todayStartUTC.getTime() + JST_OFFSET_MS)
  const dow = jstWallClock.getUTCDay() // 0=Sun

  // その週の「日曜(JST)00:00」を UTC で算出
  const weekStartUTC = new Date(todayStartUTC.getTime() - dow * DAY_MS)
  const weekEndUTC = new Date(weekStartUTC.getTime() + 7 * DAY_MS)
  const prevWeekStartUTC = new Date(weekStartUTC.getTime() - 7 * DAY_MS)

  return {
    nowStartUTC: weekStartUTC,
    nowEndUTC: weekEndUTC,
    prevStartUTC: prevWeekStartUTC,
    prevEndUTC: weekStartUTC,
  }
}

/** JST の月情報（year/month と開始/終了 UTC）を返す */
export function jstMonthInfo(base: Date = new Date()): MonthWindow {
  // base を JST に 9h 進めて“壁時計”の年月を取る
  const jst = new Date(base.getTime() + JST_OFFSET_MS)
  const y = jst.getUTCFullYear()
  const m = jst.getUTCMonth() // 0-11

  // 当月1日(JST)00:00 と 翌月1日(JST)00:00 を UTC に戻す
  const currStartUTC = new Date(Date.UTC(y, m, 1) - JST_OFFSET_MS)
  const nextStartUTC = new Date(Date.UTC(y, m + 1, 1) - JST_OFFSET_MS)

  // 前月
  const prevY = m === 0 ? y - 1 : y
  const prevM = m === 0 ? 11 : m - 1
  const prevStartUTC = new Date(Date.UTC(prevY, prevM, 1) - JST_OFFSET_MS)

  return {
    curr: {
      year: y,
      month: m + 1,
      startUTC: currStartUTC,
      endUTC: nextStartUTC,
    },
    prev: {
      year: prevY,
      month: prevM + 1,
      startUTC: prevStartUTC,
      endUTC: currStartUTC,
    },
  }
}
