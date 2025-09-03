import { TZDateMini } from '@date-fns/tz/date/mini'
import React from 'react'

const Greeting={
  morning:{start:4,end:11,greeting:'おはよう'},
  noon:{start:11,end:14,greeting:'こんにちは'},
  afternoon:{start:14,end:18,greeting:'お疲れさま'},
  evening:{start:18,end:22,greeting:'お疲れさまでした'},
  midnight:{greeting:'夜更かしですね'},
}as const


// 時間帯判定ロジックを修正
const getGreetingByHour = (hour: number): string => {
  if (hour >= 22 || hour < 4) {
    return Greeting.midnight.greeting
  }
  
  // 他の時間帯を順番にチェック
  const timeRanges = [
    Greeting.morning,
    Greeting.noon,
    Greeting.afternoon,
    Greeting.evening,
  ]
    for (const range of timeRanges) {
    if (hour >= range.start && hour < range.end) {
      return range.greeting
    }
  }
  
  // フォールバック（通常は到達しない）
  return Greeting.midnight.greeting
}

// 日本時間取得を純粋関数として分離
const getJapanHour = (): number => {
  const now = new Date()
  const japanTime = new TZDateMini(now, 'Asia/Tokyo')
  return japanTime.getHours()
}

// カスタムフックとして挨拶ロジックを分離（オプション）
const useGreeting = () => {
  const hour = getJapanHour()
  return getGreetingByHour(hour)
}


interface Props {
  className?: string
  children?: (greeting: string) => React.ReactNode
}
// メインコンポーネント
const TimeRangeGreeting = ({ 
  className,
  children 
}:Props) => {
  const greetingMessage = useGreeting()
  
  // render propパターンに対応
  if (children) {
    return <>{children(greetingMessage)}</>
  }
  
  return (
    <span className={className}>
      {greetingMessage}
    </span>
  )
}

export default TimeRangeGreeting

// 使用例をエクスポート
export { getGreetingByHour, getJapanHour, useGreeting }