// src/app/_utils/studyTimeHelpers.ts
import { TZDateMini } from '@date-fns/tz'

const ZONE = 'Asia/Tokyo' as const
const DAY_MS = 86_400_000

/**
 * JST の“今日 00:00”を UTC の Date で返す
 */
function jstMidnightUtc(base: Date = new Date()): Date {
  const wall = new TZDateMini(base, ZONE) // JSTの壁時計
  const jstMidnight = new TZDateMini(
    wall.getFullYear(),
    wall.getMonth(),
    wall.getDate(),
    0,
    0,
    0,
    0,
    ZONE,
  )
  // TZDateMiniのgetTime()は、そのJST壁時計時刻が実際に対応するUTCのエポックms
  return new Date(jstMidnight.getTime())
}

/**
 * JST基準の週（日曜00:00〜翌週日曜00:00）の UTC 範囲を返す
 * - DBのtimestamp(UTC保存)をこの範囲で検索すれば、JSTの週区切りで集計できる
 * - startは「JSTのその週の日曜00:00」の実UTC、endは +7日
 */
export function getWeekUtcRange(base: Date = new Date()): { start: Date; end: Date } {
  const start = getStartOfWeek(base) // JST週の日曜00:00(UTC)
  const end = new Date(start.getTime() + 7 * DAY_MS)
  return { start, end }
}

/**
 * JST基準で“その週の開始（＝日曜 00:00）”を UTC の Date で返す
 * 互換のため名称は従来通りだが、内部ロジックをJSTに変更
 */
export function getStartOfWeek(date: Date = new Date()): Date {
  // 今日(JST)の00:00(UTC)を起点に、JSTの曜日(0:日〜6:土)だけ戻る
  const todayJstStartUtc = jstMidnightUtc(date)
  const dow = new TZDateMini(todayJstStartUtc, ZONE).getDay() // JSTの曜日
  const weekStartUtc = new Date(todayJstStartUtc.getTime() - dow * DAY_MS)
  return weekStartUtc
}

/**
 * 分配列を合計 h（小数1桁）に丸めて返す
 */
export function calculateTotalHours(minutesArray: number[]): number {
  const totalMinutes = minutesArray.reduce((sum, minutes) => sum + (minutes ?? 0), 0)
  return Math.round((totalMinutes / 60) * 10) / 10 // 小数第1位まで
}
