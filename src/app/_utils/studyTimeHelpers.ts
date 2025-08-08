export function getWeekUtcRange() {
  const now = new Date()
  const start = getStartOfWeek(now)
  const end = new Date(start)
  end.setUTCDate(end.getUTCDate() + 7)
  return { start, end }
}

export function getStartOfWeek(date = new Date()): Date {
  const d = new Date(date)
  const day = d.getUTCDay() // 0(日)〜6(土)
  const diff = d.getUTCDate() - day
  d.setUTCDate(diff)
  d.setUTCHours(0, 0, 0, 0)
  return d
}

export function calculateTotalHours(minutesArray: number[]): number {
  const totalMinutes = minutesArray.reduce((sum, minutes) => sum + minutes, 0)
  return Math.round((totalMinutes / 60) * 10) / 10 // 小数第1位まで
}
