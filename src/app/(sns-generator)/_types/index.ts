export type Tone = 'カジュアル' | '真面目' | 'ポジティブ'

export interface PostData {
  [key: string]: string[]
}

export interface StudySummary {
  subject: string
  duration: string
  streak: string
}

export interface PostingTip {
  text: string
}
