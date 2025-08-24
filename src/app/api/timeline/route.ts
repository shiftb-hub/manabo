import { NextResponse } from 'next/server'

import type { TimelinePost, TimelineResponse } from '@/app/(timeline)/timeline/_types/types'
import { prisma } from '@/app/_lib/prisma'
import { getCurrentStreaksForUsers } from '@/app/_server/streak'
import { requireUser } from '@/app/_utils/api/requireUser'
import { minutesToHour1dp, toAvatarInitials, toMap, toRelative, uniq } from '@/app/_utils/timeline'

export const dynamic = 'force-dynamic'

const TAKE = 10

/* =========================
   Data access
   ========================= */
async function fetchRecords() {
  return prisma.learningRecord.findMany({
    take: TAKE,
    // 同時刻の並びを安定化（id 降順でタイブレーク）
    orderBy: [{ startTime: 'desc' }, { id: 'desc' }],
    select: {
      id: true,
      userId: true,
      categoryId: true,
      content: true,
      startTime: true,
      duration: true, // 分
    },
  })
}

type UserRow = { id: number; nickName: string | null }
type CategoryRow = { id: number; categoryName: string }

async function fetchLookups(userIds: number[], categoryIds: number[]) {
  const [users, categories, streakMap] = await Promise.all([
    prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, nickName: true },
    }) as Promise<UserRow[]>,
    prisma.category.findMany({
      where: { id: { in: categoryIds } },
      select: { id: true, categoryName: true },
    }) as Promise<CategoryRow[]>,
    getCurrentStreaksForUsers(userIds, 60),
  ])

  return {
    userMap: toMap(users, (u) => u.id),
    categoryMap: new Map<number, string>(categories.map((c) => [c.id, c.categoryName])),
    streakMap,
  }
}

/* =========================
   Transformation
   ========================= */
function buildItems(params: {
  rows: Awaited<ReturnType<typeof fetchRecords>>
  userMap: Map<number, UserRow>
  categoryMap: Map<number, string>
  streakMap: Map<number, number>
}): TimelinePost[] {
  const { rows, userMap, categoryMap, streakMap } = params

  // いまは全員 false 固定（Follow導入時に差し替え）
  const followMap = new Map<number, boolean>()
  uniq(rows.map((r) => r.userId)).forEach((id) => followMap.set(id, false))

  return rows.map((r) => {
    const u = userMap.get(r.userId)
    const name = u?.nickName ?? '名無し'

    return {
      id: Number(r.id),
      user: {
        name,
        avatar: toAvatarInitials(name),
        studyStreak: streakMap.get(r.userId) ?? 0,
        learningStyle: '',
      },
      category: r.categoryId != null ? (categoryMap.get(r.categoryId) ?? '') : '',
      time: minutesToHour1dp(r.duration),
      content: r.content ?? '',
      timestamp: toRelative(r.startTime),
      likes: 0,
      comments: 0,
      isFollowing: followMap.get(r.userId) ?? false,
    }
  })
}

/* =========================
   Handler
   ========================= */
export async function GET() {
  const guard = await requireUser()
  if (!guard.ok) return guard.response

  try {
    // ① 最新10件を取得
    const rows = await fetchRecords()

    // ② 関連情報を一括フェッチ
    const userIds = uniq(rows.map((r) => r.userId))
    const categoryIds = uniq(rows.map((r) => r.categoryId).filter((v): v is number => v != null))
    const { userMap, categoryMap, streakMap } = await fetchLookups(userIds, categoryIds)

    // ③ APIレスポンスへ整形
    const items = buildItems({ rows, userMap, categoryMap, streakMap })

    const res = NextResponse.json<TimelineResponse>({ items }, { status: 200 })
    res.headers.set('Cache-Control', 'no-store')
    return res
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[timeline] failed to build response', e)
    const res = NextResponse.json({ message: 'Failed to load timeline.' }, { status: 500 })
    res.headers.set('Cache-Control', 'no-store')
    res.headers.set('X-Error', 'TIMELINE_INTERNAL')
    return res
  }
}
