import { TZDateMini } from '@date-fns/tz/date/mini'
import React from 'react'

interface Props {
  className?: string
  children?: (greeting: string) => React.ReactNode
}

const Greetings = [
  { start: 3, end: 10, greeting: 'おはよう' },   
  { start: 11, end: 13, greeting: 'こんにちは' }, 
  { start: 14, end: 17, greeting: 'お疲れさま' },
  { start: 18, end: 21, greeting: 'お疲れさまでした' },
  { start: 22, end: 24, greeting: '夜更かしですね' },
  { start: 0, end: 3, greeting: '夜更かしですね' },
]
// ロジックを修正
const getGreetingByHour = (hour: number): string => {
  const found = Greetings.find((t) => hour >= t.start && hour <= t.end)
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
const TimeRangeGreeting = ({ className }: Props) => {
  const greetingMessage = useGreeting()

  return (
    <>
      <span className={className}>{greetingMessage}</span>
    </>
  )
}

export default TimeRangeGreeting

// 使用例をエクスポート
export { getGreetingByHour, getJapanHour, useGreeting }
