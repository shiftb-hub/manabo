// src/app/api/ranking/motivation/_constants.ts
import type { Period } from './_types'

export const PERIODS: readonly Period[] = ['day', 'week', 'month'] as const

export const OPENAI_API_URL =
  process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions'
export const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini'

export const CACHE_CONTROL = 'private, max-age=600' // 10分キャッシュ
export const MAX_CHARS = 70
