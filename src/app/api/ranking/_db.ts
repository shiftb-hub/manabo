import { prisma } from '@/app/_lib/prisma'

import { jstDayRange, jstMonthInfo, jstWeekRange } from './_time'
import type { DayWindow, MonthWindow, NowRow, PrevRow, WeekWindow } from './_types'

export async function fetchDayRows(now = new Date()) {
  const win = jstDayRange(now)
  const [nowRows, prevRows] = await Promise.all([
    prisma.learningDailyRecord.findMany({
      where: { day: { gte: win.nowStartUTC, lt: win.nowEndUTC } },
      select: {
        userId: true,
        totalTime: true,
        user: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningDailyRecord.findMany({
      where: { day: { gte: win.prevStartUTC, lt: win.prevEndUTC } },
      select: { userId: true, totalTime: true },
    }),
  ])
  return { nowRows, prevRows, window: win }
}

export async function fetchWeekRows(now = new Date()) {
  const win = jstWeekRange(now)
  const [nowRows, prevRows] = await Promise.all([
    prisma.learningWeekRecord.findMany({
      where: { week: { gte: win.nowStartUTC, lt: win.nowEndUTC } },
      select: {
        userId: true,
        totalTime: true,
        user: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningWeekRecord.findMany({
      where: { week: { gte: win.prevStartUTC, lt: win.prevEndUTC } },
      select: { userId: true, totalTime: true },
    }),
  ])
  return { nowRows, prevRows, window: win }
}

export async function fetchMonthRows(now = new Date()) {
  const win = jstMonthInfo(now)
  const [nowRows, prevRows] = await Promise.all([
    prisma.learningMonthRecord.findMany({
      where: { year: win.curr.year, month: win.curr.month },
      select: {
        userId: true,
        totalTime: true,
        user: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningMonthRecord.findMany({
      where: { year: win.prev.year, month: win.prev.month },
      select: { userId: true, totalTime: true },
    }),
  ])
  return { nowRows, prevRows, window: win }
}

/* ---- Fallback (LearningRecord から合算) ---------------------------------- */

export async function fallbackDay(window: DayWindow) {
  const [nowRec, prevRec] = await Promise.all([
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.nowStartUTC, lt: window.nowEndUTC } },
      select: {
        userId: true,
        duration: true, // 時間単位なら *60 に変える
        users: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.prevStartUTC, lt: window.prevEndUTC } },
      select: { userId: true, duration: true },
    }),
  ])
  return {
    nowRows: toNowRowsFromLearningRecord(nowRec),
    prevRows: toPrevRowsFromLearningRecord(prevRec),
  }
}

export async function fallbackWeek(window: WeekWindow) {
  const [nowRec, prevRec] = await Promise.all([
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.nowStartUTC, lt: window.nowEndUTC } },
      select: {
        userId: true,
        duration: true,
        users: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.prevStartUTC, lt: window.prevEndUTC } },
      select: { userId: true, duration: true },
    }),
  ])
  return {
    nowRows: toNowRowsFromLearningRecord(nowRec),
    prevRows: toPrevRowsFromLearningRecord(prevRec),
  }
}

export async function fallbackMonth(window: MonthWindow) {
  const [nowRec, prevRec] = await Promise.all([
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.curr.startUTC, lt: window.curr.endUTC } },
      select: {
        userId: true,
        duration: true,
        users: { select: { nickName: true, profile: { select: { profilePicture: true } } } },
      },
    }),
    prisma.learningRecord.findMany({
      where: { learningDate: { gte: window.prev.startUTC, lt: window.prev.endUTC } },
      select: { userId: true, duration: true },
    }),
  ])
  return {
    nowRows: toNowRowsFromLearningRecord(nowRec),
    prevRows: toPrevRowsFromLearningRecord(prevRec),
  }
}

/* ---- LearningRecord → Now/PrevRow 変換 ---------------------------------- */

export function toNowRowsFromLearningRecord(
  rows: Array<{
    userId: number
    duration: number | null
    users: { nickName: string; profile: { profilePicture: string | null } | null } | null
  }>,
): NowRow[] {
  const map = new Map<number, NowRow>()
  for (const r of rows) {
    const cur = map.get(r.userId) ?? {
      userId: r.userId,
      totalTime: 0,
      user: r.users ? { nickName: r.users.nickName, profile: r.users.profile } : null,
    }
    cur.totalTime += r.duration ?? 0
    map.set(r.userId, cur)
  }
  return Array.from(map.values())
}

export function toPrevRowsFromLearningRecord(
  rows: Array<{ userId: number; duration: number | null }>,
): PrevRow[] {
  const map = new Map<number, PrevRow>()
  for (const r of rows) {
    const cur = map.get(r.userId) ?? { userId: r.userId, totalTime: 0 }
    cur.totalTime += r.duration ?? 0
    map.set(r.userId, cur)
  }
  return Array.from(map.values())
}
