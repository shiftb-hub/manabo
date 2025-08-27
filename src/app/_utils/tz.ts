// 既存コードの呼び名を "TZDate" に統一して使う方針
export { TZDateMini as TZDate } from '@date-fns/tz'

// 既定タイムゾーン（JST）
export const TZ = 'Asia/Tokyo' as const

// Prisma など UTC Date が必要な I/O で使うヘルパ
export const toUTCDate = (tzLike: { getTime: () => number }) => new Date(tzLike.getTime())
