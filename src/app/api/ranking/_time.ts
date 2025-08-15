import {
  addDays,
  addMonths,
  getMonth,
  getYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { fromZonedTime, toZonedTime } from 'date-fns-tz'

import type { DayWindow, MonthWindow, WeekWindow } from './_types'

export const TZ = 'Asia/Tokyo'

export const utcToJst = (d: Date) => toZonedTime(d, TZ)
export const jstToUtc = (z: Date) => fromZonedTime(z, TZ)

export function jstDayRange(base = new Date()): DayWindow {
  const z = utcToJst(base)
  const startZ = startOfDay(z)
  const endZ = addDays(startZ, 1)
  const prevStartZ = addDays(startZ, -1)
  return {
    nowStartUTC: jstToUtc(startZ),
    nowEndUTC: jstToUtc(endZ),
    prevStartUTC: jstToUtc(prevStartZ),
    prevEndUTC: jstToUtc(startZ),
  }
}

export function jstWeekRange(base = new Date()): WeekWindow {
  const z = utcToJst(base)
  const wStartZ = startOfWeek(z, { weekStartsOn: 1 })
  const wEndZ = addDays(wStartZ, 7)
  const prevStartZ = addDays(wStartZ, -7)
  return {
    nowStartUTC: jstToUtc(wStartZ),
    nowEndUTC: jstToUtc(wEndZ),
    prevStartUTC: jstToUtc(prevStartZ),
    prevEndUTC: jstToUtc(wStartZ),
  }
}

export function jstMonthInfo(base = new Date()): MonthWindow {
  const z = utcToJst(base)
  const mStartZ = startOfMonth(z)
  const nextMStartZ = addMonths(mStartZ, 1)
  const prevMStartZ = addMonths(mStartZ, -1)
  return {
    curr: {
      year: getYear(mStartZ),
      month: getMonth(mStartZ) + 1,
      startUTC: jstToUtc(mStartZ),
      endUTC: jstToUtc(nextMStartZ),
    },
    prev: {
      year: getYear(prevMStartZ),
      month: getMonth(prevMStartZ) + 1,
      startUTC: jstToUtc(prevMStartZ),
      endUTC: jstToUtc(mStartZ),
    },
  }
}
