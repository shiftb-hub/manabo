'use client'

import { Award, Crown, Medal } from 'lucide-react'
import type { JSX } from 'react'

/**
 * ランキング順位に応じたアイコンを返す
 * 1〜3位までは専用アイコン、それ以降は数字表示
 */
export const getRankIcon = (rank: number): JSX.Element => {
  switch (rank) {
    case 1:
      return <Crown className='w-6 h-6 text-yellow-500' />
    case 2:
      return <Medal className='w-6 h-6 text-gray-400' />
    case 3:
      return <Award className='w-6 h-6 text-amber-600' />
    default:
      return <span className='text-lg font-bold text-gray-600'>#{rank}</span>
  }
}

/**
 * 順位変動の記号に応じて適切な文字色クラスを返す
 */
export const getChangeColor = (change: string): string => {
  if (change.startsWith('+')) return 'text-green-600'
  if (change.startsWith('-')) return 'text-red-600'
  return 'text-gray-500'
}

/**
 * ランキング期間に対応する日本語ラベルを返す
 */
export const getPeriodLabel = (period: 'day' | 'week' | 'month'): string => {
  switch (period) {
    case 'day':
      return '今日'
    case 'week':
      return '今週'
    case 'month':
      return '今月'
    default:
      return ''
  }
}

export const getMotivationMessage = (period: 'day' | 'week' | 'month'): string => {
  const messages: Record<'day' | 'week' | 'month', string> = {
    day: '今日は3位にランクイン！この調子で頑張りましょう。',
    week: '今週は3位をキープ中！継続的な努力が実を結んでいます。',
    month: '今月は4位！上位を目指して頑張りましょう。',
  }
  return messages[period] ?? ''
}
