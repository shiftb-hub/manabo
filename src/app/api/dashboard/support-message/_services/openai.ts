import OpenAI from 'openai'

import { OPENAI_MODEL } from '../_constants'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface Props {
  streakCount: number
  todayHours: number
  weeklyProgress: number
}
const FallbackMessage = '今日も素晴らしい一日にしましょう！継続は力なりです。'

const createPrompt = ({ streakCount, todayHours, weeklyProgress }: Props) => `
あなたは優しい学習コーチ。以下のデータをもとに励ましのメッセージを日本語で1つ作ってください。
- 学習連続日数: ${streakCount}日
- 今日の学習時間: ${todayHours}時間
- 今週の進捗: ${weeklyProgress}%
必ずポジティブでやる気が出る短めの文章にしてください。
今日の学習時間や今週の進捗は参考にする程度であまり触れなくて良い。
文字数は50文字程度にしてください。
`

export const callOpenAI = async (props: Props): Promise<string> => {
  //ハング対策 タイムアウト設定（例: 21秒）
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 21_000)

  try {
    const res = await openai.chat.completions.create(
      {
        model: OPENAI_MODEL,
        messages: [{ role: 'user', content: createPrompt(props) }],
      },
      { signal: controller.signal },
    )
    return res.choices[0]?.message?.content ?? `${FallbackMessage}`
  } catch (error) {
    if (!(error instanceof Error)) {
      return '予期せぬエラーが発生しました。今日も頑張りましょう！'
    }
    if (error.name === 'AbortError') {
      return 'AIの応答がタイムアウトしました。${FallbackMessage}'
    }
    console.error(error.message)
    return 'AIの応答を取得できませんでした。${FallbackMessage}'
  } finally {
    clearTimeout(timeout)
  }
}
