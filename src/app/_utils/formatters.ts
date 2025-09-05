// 分を「○時間○分」形式の文字列に変換
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours > 0 && mins > 0) return `${hours}時間${mins}分`
  if (hours > 0) return `${hours}時間`
  if (mins > 0) return `${mins}分`
  return '0分'
}

// 学習記録の合計時間を計算
export const calculateTotalDuration = (records: { duration: number | null }[]): number => {
  return records.reduce((sum, r) => sum + (r.duration ?? 0), 0)
}
