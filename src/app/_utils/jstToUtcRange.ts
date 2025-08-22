import { TZDate } from '@date-fns/tz'
import { addDays, addWeeks, startOfDay, startOfWeek } from 'date-fns'

export const jstToUtcRange = (now: Date, kind: 'day' | 'week') => {
  const jstNow = new TZDate(now, 'Asia/Tokyo')
  if (kind === 'day') {
    const start = startOfDay(jstNow)
    return { utcStart: new Date(start), utcEnd: new Date(addDays(start, 1)) }
  } else {
    const start = startOfWeek(jstNow, { weekStartsOn: 0 })
    return { utcStart: new Date(start), utcEnd: new Date(addWeeks(start, 1)) }
  }
}
