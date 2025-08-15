import { NextResponse } from 'next/server'

import { getAuthUser } from '@/app/_utils/api/requireUser'

import {
  fallbackDay,
  fallbackMonth,
  fallbackWeek,
  fetchDayRows,
  fetchMonthRows,
  fetchWeekRows,
} from './_db'
import { buildRankingResponse } from './_rank'
import type { RankingPeriod } from './_types'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const period: RankingPeriod = (searchParams.get('period') as RankingPeriod) ?? 'week'
  const limit = Number(searchParams.get('limit') ?? 100)
  const forceFallback = searchParams.get('force') === 'fallback'

  // ハード認証：未ログインなら 401 を返す
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  const viewerUserId = user.id

  try {
    if (period === 'day') {
      const { nowRows, prevRows, window } = await fetchDayRows()
      if (forceFallback || nowRows.length === 0) {
        const fb = await fallbackDay(window)
        return NextResponse.json(
          await buildRankingResponse(fb.nowRows, fb.prevRows, viewerUserId, limit),
        )
      }
      return NextResponse.json(await buildRankingResponse(nowRows, prevRows, viewerUserId, limit))
    }

    if (period === 'week') {
      const { nowRows, prevRows, window } = await fetchWeekRows()
      if (forceFallback || nowRows.length === 0) {
        const fb = await fallbackWeek(window)
        return NextResponse.json(
          await buildRankingResponse(fb.nowRows, fb.prevRows, viewerUserId, limit),
        )
      }
      return NextResponse.json(await buildRankingResponse(nowRows, prevRows, viewerUserId, limit))
    }

    // month
    const { nowRows, prevRows, window } = await fetchMonthRows()
    if (forceFallback || nowRows.length === 0) {
      const fb = await fallbackMonth(window)
      return NextResponse.json(
        await buildRankingResponse(fb.nowRows, fb.prevRows, viewerUserId, limit),
      )
    }
    return NextResponse.json(await buildRankingResponse(nowRows, prevRows, viewerUserId, limit))
  } catch {
    // UI を壊さないよう空で返す
    return NextResponse.json({ items: [], currentUser: null }, { status: 200 })
  }
}
