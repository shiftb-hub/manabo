'use server'

import { Prisma } from '@prisma/client'

import { prisma } from '@/app/_lib/prisma'

/**
 * 指定された userIds について、直近 daysWindow 日の
 * 「学習があった日（learning_date::date）」の連続末尾長（streak）を返す。
 *
 * 戻り値: Map<userId, streak>
 *
 * - テーブル: learning_records
 * - 列: user_id, learning_date
 * - 文字列はシングルクォート、SQL は Prisma.sql（パラメタ化）
 */
export async function getCurrentStreaksForUsers(
  userIds: number[],
  daysWindow = 60,
): Promise<Map<number, number>> {
  if (!userIds || userIds.length === 0) return new Map<number, number>()

  // 直近 daysWindow 日分だけ見て、連続末尾をカウント
  const rows = await prisma.$queryRaw<{ userId: number; streak: number }[]>(Prisma.sql`
    with dates as (
      select
        lr.user_id as "userId",
        lr.learning_date::date as d
      from learning_records lr
      where lr.learning_date >= now() - interval '${daysWindow} day'
        and lr.user_id in (${Prisma.join(userIds)})
      group by lr.user_id, lr.learning_date::date
    ),
    gaps as (
      select
        "userId",
        d,
        d - (row_number() over (partition by "userId" order by d)) * interval '1 day' as grp
      from dates
    ),
    tails as (
      select
        "userId",
        grp,
        max(d) as max_d,
        count(*)::int as span
      from gaps
      group by "userId", grp
    ),
    current_chain as (
      select
        t."userId",
        case
          when t.max_d = (now()::date) then t.span
          when t.max_d = (now()::date - interval '1 day')::date then t.span
          else 0
        end as streak
      from tails t
    )
    select
      c."userId",
      coalesce(max(c.streak), 0)::int as streak
    from current_chain c
    group by c."userId"
  `)

  return new Map<number, number>(rows.map((r) => [r.userId, r.streak]))
}
