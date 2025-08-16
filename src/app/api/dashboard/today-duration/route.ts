import { NextResponse } from 'next/server'

import type { StudyTimeResponse } from '@/app/(dashboard)/dashboard/_types/todayStudyTime'
import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'
import { jstToUtcRange } from '@/app/_utils/jstToUtcRange'

type TodayStudyRecord = { duration: number }

export const GET = async () => {
  const guard = await requireUser()
  if (!guard.ok) return guard.response
  const user = guard.user

  const { utcStart, utcEnd } = jstToUtcRange(new Date(), 'day')

  try {
    const todayStudyRecords: TodayStudyRecord[] = await prisma.learningRecord.findMany({
      where: {
        userId: user.id,
        startTime: { gte: utcStart, lt: utcEnd },
      },
      select: { duration: true },
    })

    const totalStudyMinutes = todayStudyRecords.reduce((sum, r) => sum + (r.duration ?? 0), 0)
    const totalStudyHours = Number((totalStudyMinutes / 60).toFixed(2))
    const body: StudyTimeResponse = { totalStudyHours }

    return NextResponse.json(body, { status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
  }
}
