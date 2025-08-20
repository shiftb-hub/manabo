import { NextResponse } from 'next/server'

import type { TimelinePost, TimelineResponse } from '@/app/(timeline)/timeline/_types/types'
import { prisma } from '@/app/_lib/prisma'
import { getCurrentStreaksForUsers } from '@/app/_server/streak'
import { requireUser } from '@/app/_utils/api/requireUser'

export const dynamic = 'force-dynamic'

const TAKE = 10

function toAvatarInitials(name: string): string {
  const trimmed = (name ?? '').trim()
  if (!trimmed) return '??'
  const parts = trimmed.split(/\s+/)
  if (parts.length >= 2) return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase()
  return trimmed.slice(0, 2).toUpperCase()
}
function toRelative(utc: Date): string {
  const diffMs = Date.now() - utc.getTime()
  const sec = Math.max(0, Math.floor(diffMs / 1000))
  if (sec < 60) return 'たった今'
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min}分前`
  const hrs = Math.floor(min / 60)
  if (hrs < 24) return `${hrs}時間前`
  const days = Math.floor(hrs / 24)
  return `${days}日前`
}

export async function GET() {
  const guard = await requireUser()
  if (!guard.ok) return guard.response

  try {
    const records = await prisma.learningRecord.findMany({
      take: TAKE,
      orderBy: { startTime: 'desc' },
      select: {
        id: true,
        userId: true,
        categoryId: true,
        content: true,
        startTime: true,
        duration: true, // 分
      },
    })

    const userIds = Array.from(new Set(records.map((r) => r.userId)))
    const categoryIds = Array.from(
      new Set(records.map((r) => r.categoryId).filter((v): v is number => v != null)),
    )

    type UserRow = { id: number; nickName: string | null }
    type CategoryRow = { id: number; categoryName: string }

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

    const userMap = new Map<number, UserRow>(users.map((u) => [u.id, u]))
    const categoryMap = new Map<number, string>(categories.map((c) => [c.id, c.categoryName]))

    // 現状は false 固定（Followテーブル導入時に置き換え）
    const isFollowed = new Map<number, boolean>()
    userIds.forEach((id) => isFollowed.set(id, false))

    const items: TimelinePost[] = records.map((r) => {
      const u = userMap.get(r.userId)
      const name = u?.nickName ?? '名無し'
      const avatar = toAvatarInitials(name)
      const studyStreak = streakMap.get(r.userId) ?? 0
      const minutes = Number(r.duration ?? 0)
      const time = Math.round((minutes / 60) * 10) / 10
      const category = r.categoryId != null ? (categoryMap.get(r.categoryId) ?? '') : ''
      const content = r.content ?? ''

      return {
        id: Number(r.id),
        user: { name, avatar, studyStreak, learningStyle: '' },
        category,
        time,
        content,
        timestamp: toRelative(r.startTime),
        likes: 0,
        comments: 0,
        isFollowing: isFollowed.get(r.userId) ?? false,
      }
    })

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
