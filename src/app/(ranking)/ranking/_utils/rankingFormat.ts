/** 変動値（number）→ 表示用 "+2" | "-1" | "0" */
export const formatChange = (n: number): string => {
  if (n === 0) return '0'
  return `${n > 0 ? '+' : '-'}${Math.abs(n)}`
}

/** 分 → 小数1桁の時間 */
export const minutesToHours1dp = (m: number): number => Math.round((m / 60) * 10) / 10
