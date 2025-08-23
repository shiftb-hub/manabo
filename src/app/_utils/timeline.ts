export function toAvatarInitials(name: string): string {
  const trimmed = (name ?? '').trim()
  if (!trimmed) return '??'
  const parts = trimmed.split(/\s+/)
  if (parts.length >= 2) return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase()
  return trimmed.slice(0, 2).toUpperCase()
}

export function toRelative(utc: Date): string {
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

export function minutesToHour1dp(minutes: number | null | undefined): number {
  const m = Number(minutes ?? 0)
  return Math.round((m / 60) * 10) / 10
}

export const uniq = <T>(arr: T[]) => Array.from(new Set(arr))
export const toMap = <K, V>(arr: V[], key: (v: V) => K) => new Map(arr.map((v) => [key(v), v]))
