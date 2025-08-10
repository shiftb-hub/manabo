import { TZDate } from '@date-fns/tz'
import { endOfDay, startOfDay } from 'date-fns'
import { NextResponse } from 'next/server'

import type { StudyTimeResponse } from '@/app/(dashboard)/dashboard/_types/todayStudyTime'
import { prisma } from '@/app/_lib/prisma'
import { requireUser } from '@/app/_utils/api/requireUser'

type TodayStudyRecord = { duration: number }

export const GET = async () => {
  const { user, errorResponse } = await requireUser()
  if (!user) return errorResponse

  const jstNow = new TZDate(new Date(), 'Asia/Tokyo')
  const jstStart = startOfDay(jstNow)
  const jstEnd = endOfDay(jstNow)

  const utcStart = new Date(jstStart)
  const utcEnd = new Date(jstEnd)

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
