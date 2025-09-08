import React from 'react'

interface Props {
  streakCount: number
  isLoading: boolean
}

const mileStoneMessages: Record<number, string> = {
  1: '初日達成！今日から新しい習慣の始まりですね✨',
  2: '2日連続！いいスタートです🔥',
  3: '3日坊主…？いえ、あなたは違いますね😉',
  5: '5日継続！手応え出てきましたか？',
  7: '1週間達成！小さな積み重ねが力になります💪',
  10: '10日連続！二桁に突入しました🎉',
  14: '2週間！もう習慣化の入り口ですね😌',
  21: '21日間継続！習慣化の壁を越えました👏',
  30: '1ヶ月連続！継続は力なり💎',
  50: '50日達成！半分100日まで来ました🔥',
  75: '75日連続！コツコツは裏切りませんね😊',
  100: '100日達成！三桁クラブ入りおめでとう🎖️',
  150: '150日達成！もう生活の一部ですね☕',
  200: '200日連続！あなたの集中力は本物です💎',
  300: '300日達成！1年が見えてきましたね🌏',
  365: '1年間継続！これはもう偉業です🏆',
  500: '500日連続！あなたの物語はまだ続きます📖',
  1000: '1000日達成！伝説級の継続力です🔥',
}
// 範囲に対するメッセージ（降順で定義することで最初にマッチしたものが使われる）
const rangeMessages = [
  { min: 1000, template: (count: number) => `${count}日達成！伝説級の継続力です🔥` },
  { min: 500, template: (count: number) => `${count}日連続！素晴らしい継続力です✨` },
  { min: 365, template: (count: number) => `${count}日連続！1年を超えましたね🎉` },
  { min: 300, template: (count: number) => `${count}日連続！もうすぐ1年ですね💪` },
  { min: 200, template: (count: number) => `${count}日連続！習慣の達人ですね😊` },
  { min: 100, template: (count: number) => `${count}日連続！三桁継続中です🔥` },
  { min: 50, template: (count: number) => `${count}日連続！順調に継続中です💪` },
  { min: 30, template: (count: number) => `${count}日連続！習慣が身についてきましたね😌` },
  { min: 21, template: (count: number) => `${count}日連続！習慣化できていますね👏` },
  { min: 14, template: (count: number) => `${count}日連続！2週間を超えました✨` },
  { min: 7, template: (count: number) => `${count}日連続！1週間を超えました🎉` },
  { min: 4, template: (count: number) => `${count}日連続！良いペースですね😊` },
  { min: 0, template: () => 'これからがんばっていきましょう💪' },
]
// メッセージを取得するロジック関数
const getStreakMessage = (streakCount: number, isLoading: boolean): string => {
  if (isLoading) {
    return '...'
  }

  if (mileStoneMessages[streakCount]) {
    return mileStoneMessages[streakCount]
  }

  // 範囲に基づいたメッセージを取得
  const rangeMessage = rangeMessages.find((range) => streakCount >= range.min)
  return rangeMessage?.template(streakCount) ?? 'これからがんばっていきましょう💪'
}

// JSXを返す
export const StreakMessage = ({ streakCount, isLoading }: Props) => {
  const message = getStreakMessage(streakCount, isLoading)
  return <span>{message}</span>
}
