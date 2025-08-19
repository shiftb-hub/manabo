import { prisma } from '@/app/_lib/prisma'

import type { BuildResponse, NowRow, PrevRow, UiRankingUser } from './_types'

export function aggregateByUser(
  rows: Array<NowRow | PrevRow>,
): { userId: number; totalTime: number; nickName?: string | null; avatar: string | null }[] {
  const map = new Map<
    number,
    { userId: number; totalTime: number; nickName?: string | null; avatar: string | null }
  >()

  for (const r of rows) {
    const cur = map.get(r.userId) ?? {
      userId: r.userId,
      totalTime: 0,
      nickName: undefined,
      avatar: null,
    }
    cur.totalTime += r.totalTime ?? 0
    if ('user' in r && r.user) {
      cur.nickName = r.user.nickName
      cur.avatar = r.user.profile?.profilePicture ?? null
    }
    map.set(r.userId, cur)
  }
  return Array.from(map.values())
}

export function assignRanks<T extends { totalTime: number }>(list: T[]) {
  let lastTime: number | null = null
  let lastRank = 0
  return list.map((item, i) => {
    if (lastTime === null || item.totalTime !== lastTime) {
      lastRank = i + 1
      lastTime = item.totalTime
    }
    return Object.assign(item, { rank: lastRank })
  })
}

export async function buildRankingResponse(
  nowRows: NowRow[],
  prevRows: PrevRow[],
  viewerUserId: number | null,
  limit: number,
): Promise<BuildResponse> {
  const prevAgg = aggregateByUser(prevRows).sort((a, b) => b.totalTime - a.totalTime)
  const prevRankMap = new Map<number, number>()
  assignRanks(prevAgg).forEach((u) => prevRankMap.set(u.userId, u.rank))

  const nowAgg = aggregateByUser(nowRows).sort((a, b) => b.totalTime - a.totalTime)
  const rankedAll = assignRanks(nowAgg).map<UiRankingUser>((u) => {
    const prevRank = prevRankMap.get(u.userId)
    const change = prevRank ? prevRank - u.rank : 0
    return {
      userId: u.userId,
      rank: u.rank,
      name: u.nickName ?? 'ユーザー',
      avatar: u.avatar,
      time: Math.round(u.totalTime),
      change,
      streak: 0,
    }
  })

  const items = rankedAll.slice(0, Math.max(1, limit))

  let currentUser: UiRankingUser | null = null
  if (viewerUserId != null) {
    currentUser = rankedAll.find((r) => r.userId === viewerUserId) ?? null
    if (!currentUser) {
      const self = await prisma.user.findUnique({
        where: { id: viewerUserId },
        select: { nickName: true, profile: { select: { profilePicture: true } } },
      })
      if (self) {
        currentUser = {
          userId: viewerUserId,
          rank: rankedAll.length + 1,
          name: self.nickName ?? 'ユーザー',
          avatar: self.profile?.profilePicture ?? null,
          time: 0,
          change: 0,
          streak: 0,
        }
      }
    }
  }

  return { items, currentUser }
}
