import { NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'
import { getWeeklyGoalHours } from '@/app/_utils/goalHelpers'
import { calculateTotalHours, getWeekUtcRange } from '@/app/_utils/studyTimeHelpers'
import { createClient } from '@/app/_utils/supabase/server'

export const GET = async () => {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ status: 'Unauthorized' }, { status: 401 })
  }

  const targetUser = await prisma.user.findUnique({
    where: { supabaseUserId: user.id },
  })

  if (!targetUser) {
    return NextResponse.json({ status: 'User not found' }, { status: 404 })
  }

  try {
    const { start, end } = getWeekUtcRange()

    // 今週の学習記録を取得
    const records = await prisma.learningRecord.findMany({
      where: {
        userId: targetUser.id,
        startTime: {
          gte: start,
          lt: end,
        },
      },
      select: {
        duration: true,
      },
    })

    const minutesArray = records.map((record) => record.duration ?? 0)
    const currentHours = calculateTotalHours(minutesArray)

    const goalHours = await getWeeklyGoalHours() // TODO goalHelpers.tsで固定値を返す関数を使用、今後実装

    const percentage = goalHours > 0 ? Math.round((currentHours / goalHours) * 100) : 0

    return NextResponse.json(
      {
        currentHours,
        goalHours,
        percentage,
      },
      { status: 200 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ message }, { status: 500 })
  }
}
