import { addDays, addWeeks, startOfDay, startOfWeek } from 'date-fns'

import { TZ, TZDate, toUTCDate } from '@/app/_utils/tz'

export const jstToUtcRange = (now: Date, kind: 'day' | 'week') => {
  const jstNow = new TZDate(now, TZ)

  if (kind === 'day') {
    const start = startOfDay(jstNow)
    const end = addDays(start, 1)
    return { utcStart: toUTCDate(start), utcEnd: toUTCDate(end) }
  } else {
    const start = startOfWeek(jstNow, { weekStartsOn: 0 }) // JSTで日曜始まり
    const end = addWeeks(start, 1)
    return { utcStart: toUTCDate(start), utcEnd: toUTCDate(end) }
  }
}
