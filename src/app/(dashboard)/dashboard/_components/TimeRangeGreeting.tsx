import { TZDateMini } from '@date-fns/tz/date/mini'
import React from 'react'

interface Props {
  className?: string
  children?: (greeting: string) => React.ReactNode
}

const Greetings = [
  { start: 3, end: 11, greeting: 'おはよう' },
  { start: 11, end: 14, greeting: 'こんにちは' },
  { start: 14, end: 18, greeting: 'お疲れさま' },
  { start: 18, end: 22, greeting: 'お疲れさまでした' },
  { start: 22, end: 24, greeting: '夜更かしですね' }, // 深夜前半
  { start: 0, end: 3, greeting: '夜更かしですね' }, // 深夜後半
] as const

// ロジックを修正
const getGreetingByHour = (hour: number): string => {
  const found = Greetings.find((t) => hour >= t.start && hour < t.end)
  return found ? found.greeting : 'お疲れさま'
}

// 時間取得
const getJapanHour = (): number => {
  const now = new Date()
  const japanTime = new TZDateMini(now, 'Asia/Tokyo')
  return japanTime.getHours()
}
//判定
const useGreeting = () => getGreetingByHour(getJapanHour())


// メインコンポ
const TimeRangeGreeting = ({ className, children }: Props) => {
  const greetingMessage = useGreeting()
  if (children) {
    return <>{children(greetingMessage)}</>
  }
  return <span className={className}>{greetingMessage}</span>
}

export default TimeRangeGreeting

// 使用例をエクスポート
export { getGreetingByHour, getJapanHour, useGreeting }
