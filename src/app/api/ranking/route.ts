// src/app/api/ranking/route.ts
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
import { getCurrentStreaksForUsers } from './_server/streak'
import type { NowRow, PrevRow, RankingPeriod } from './_types'

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

  /**
   * ランキング構築 → streak 反映（失敗時は基礎ランキングのみ返す）
   * - fallback 使用時: X-Ranking-Fallback: 1
   * - streak 集計だけ失敗: X-Streak-Partial: 1（streakは0でフォールバック）
   */
  const withStreaks = async (
    nowRows: NowRow[],
    prevRows: PrevRow[],
    viewerId: number,
    size: number,
    opts?: { fallback?: boolean },
  ) => {
    const base = await buildRankingResponse(nowRows, prevRows, viewerId, size)
    type Base = Awaited<ReturnType<typeof buildRankingResponse>>
    type Item = Base['items'][number]

    let items: Item[] = base.items
    let currentUser: Base['currentUser'] = base.currentUser
    let streakPartial = false

    try {
      const userIds = Array.from(
        new Set<number>([
          ...base.items.map((u) => u.userId),
          ...(base.currentUser ? ([base.currentUser.userId] as number[]) : []),
        ]),
      )

      if (userIds.length > 0) {
        const streakMap = await getCurrentStreaksForUsers(userIds)

        items = base.items.map((u) => ({
          ...u,
          streak: streakMap.get(u.userId) ?? u.streak ?? 0,
        }))

        currentUser = base.currentUser
          ? {
              ...base.currentUser,
              streak: streakMap.get(base.currentUser.userId) ?? base.currentUser.streak ?? 0,
            }
          : null
      }
    } catch (e) {
      // streak だけ失敗 → ランキングは返す（streak は base の値 or 0）
      // eslint-disable-next-line no-console
      console.error('[ranking][streak] failed to fetch streaks', e)
      streakPartial = true
      items = base.items.map((u) => ({ ...u, streak: u.streak ?? 0 }))
      currentUser = base.currentUser
        ? { ...base.currentUser, streak: base.currentUser.streak ?? 0 }
        : null
    }

    const res = NextResponse.json<Base>({ items, currentUser })
    if (opts?.fallback) res.headers.set('X-Ranking-Fallback', '1')
    if (streakPartial) res.headers.set('X-Streak-Partial', '1')
    return res
  }

  try {
    if (period === 'day') {
      const { nowRows, prevRows, window } = await fetchDayRows()
      if (forceFallback || nowRows.length === 0) {
        const fb = await fallbackDay(window)
        return withStreaks(fb.nowRows as NowRow[], fb.prevRows as PrevRow[], viewerUserId, limit, {
          fallback: true,
        })
      }
      return withStreaks(nowRows as NowRow[], prevRows as PrevRow[], viewerUserId, limit)
    }

    if (period === 'week') {
      const { nowRows, prevRows, window } = await fetchWeekRows()
      if (forceFallback || nowRows.length === 0) {
        const fb = await fallbackWeek(window)
        return withStreaks(fb.nowRows as NowRow[], fb.prevRows as PrevRow[], viewerUserId, limit, {
          fallback: true,
        })
      }
      return withStreaks(nowRows as NowRow[], prevRows as PrevRow[], viewerUserId, limit)
    }

    // month
    const { nowRows, prevRows, window } = await fetchMonthRows()
    if (forceFallback || nowRows.length === 0) {
      const fb = await fallbackMonth(window)
      return withStreaks(fb.nowRows as NowRow[], fb.prevRows as PrevRow[], viewerUserId, limit, {
        fallback: true,
      })
    }
    return withStreaks(nowRows as NowRow[], prevRows as PrevRow[], viewerUserId, limit)
  } catch (e) {
    // DB フェッチもフォールバックもできなかった等の致命的エラー
    // eslint-disable-next-line no-console
    console.error('[ranking] fatal error', { period, limit, err: e })

    const res = NextResponse.json(
      {
        items: [] as unknown[],
        currentUser: null,
        message: 'ランキングの取得に失敗しました。時間を置いて再度お試しください。',
      },
      { status: 500 },
    )
    res.headers.set('Cache-Control', 'no-store')
    res.headers.set('X-Error', 'RANKING_INTERNAL')
    return res
  }
}
