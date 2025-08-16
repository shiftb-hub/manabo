// src/app/api/ranking/motivation/_services/openai.ts
import { MAX_CHARS, OPENAI_API_URL, OPENAI_MODEL } from '../_constants'
import type { LlmCtx, MotivationMap, Period } from '../_types'

export async function callOpenAI(payload: {
  llmCtx: Record<Period, LlmCtx>
  styleHints: Record<Period, string>
  fetcher?: typeof fetch
}): Promise<MotivationMap | null> {
  const apiKey = process.env.OPENAI_API_KEY ?? ''
  if (!apiKey) return null

  const system =
    'あなたは日本語で短く前向きな応援メッセージを作るコーチです。' +
    `各期間(day/week/month)ごとに 1〜2 文、丁寧語、絵文字なし、最大 ${MAX_CHARS} 文字程度で。` +
    '3 期間の文は「語尾・動詞・構文」が重複しないようにしてください（同じ語尾連続禁止）。' +
    'データがある期間は、順位（例:「3位」）、変動傾向（上昇/下降/キープ）、連続日数（◯日）のうち少なくとも 2 点に触れてください。' +
    '学習時間は hours をそのまま「h」単位で記述してください（例: 3.5h）。' +
    '出力は必ず JSON オブジェクト { "day": "...", "week": "...", "month": "..." } のみ。'

  const user = {
    instruction:
      '以下の前計算済みデータと文体ヒントを使って、day/week/month の各キーに応援文を 1 つずつ返してください。',
    context: payload.llmCtx,
    styleHints: payload.styleHints,
    notes:
      'hasData=false の期間は優しく促す。hasData=true の期間は指示通り。' +
      '3 期間の文体・表現はできるだけ差をつけ、語尾の連続や同一動詞の反復を避ける。',
  }

  const fetcher = payload.fetcher ?? fetch

  const resp = await fetcher(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.6,
      top_p: 0.9,
      frequency_penalty: 0.4,
      presence_penalty: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: JSON.stringify(user) },
      ],
    }),
  })

  if (!resp.ok) return null

  try {
    const data = await resp.json()
    const raw = data?.choices?.[0]?.message?.content ?? '{}'
    return JSON.parse(raw) as MotivationMap
  } catch {
    return null
  }
}
