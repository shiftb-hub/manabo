import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface Props {
  streakCount: number
  todayHours: number
  weeklyProgress: number
}

export const callOpenAI = async ({
  streakCount,
  todayHours,
  weeklyProgress,
}: Props): Promise<string> => {
  const prompt = `あなたは優しい学習コーチ。以下のデータをもとに励ましのメッセージを日本語で1つ作ってください。
- 学習連続日数: ${streakCount}日
- 今日の学習時間: ${todayHours}時間
- 今週の進捗: ${weeklyProgress}%
必ずポジティブでやる気が出る短めの文章にしてください。今週の進捗は参考にする程度であまり触れなくて良い。文字数は50文字程度にしてください。`

  const res = await openai.chat.completions.create({
    model: 'gpt-5-nano',
    messages: [{ role: 'user', content: prompt }],
  })
  return res.choices[0]?.message?.content ?? '今日も素晴らしい一日にしましょう！継続は力なりです。'
}
