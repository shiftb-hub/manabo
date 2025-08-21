import { Question } from '../_types/question'

export const LEARNING_STYLE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: '理想的な学習環境はどれですか？',
    options: [
      { id: 'A', label: '静かな図書館や個室', type: 'forest' },
      { id: 'B', label: 'カフェや友達と一緒', type: 'meadow' },
      { id: 'C', label: '効率重視でどこでも', type: 'bamboo' },
    ],
  },
  {
    id: 2,
    text: '新しい文法を覚える時は？',
    options: [
      { id: 'A', label: 'じっくり理解してから進む', type: 'forest' },
      { id: 'B', label: '友達と教え合いながら', type: 'meadow' },
      { id: 'C', label: 'パターンを見つけて効率的に' , type: 'bamboo' },
    ],
  },
  {
    id: 3,
    text: '学習時間の使い方は？',
    options: [
      { id: 'A', label: '長時間集中して一気に', type: 'forest' },
      { id: 'B', label: '仲間と楽しく短時間ずつ', type: 'meadow' },
      { id: 'C', label: '計画的に毎日少しずつ', type: 'bamboo' },
    ],
  },

  {
    id: 4,
    text: '分からない時はどうしますか？',
    options: [
      { id: 'A', label: '自分で調べて解決する', type: 'forest' },
      { id: 'B', label: '友達や先生に聞く', type: 'meadow' },
      { id: 'C', label: '効率的な方法を探す', type: 'bamboo' },
    ],
  },
  {
    id: 5,
    text: 'モチベーションの源は？',
    options: [
      { id: 'A', label: '自分の成長を実感すること', type: 'forest' },
      { id: 'B', label: '仲間と一緒に頑張ること', type: 'meadow' },
      { id: 'C', label: '目標達成への進歩', type: 'bamboo' },
    ],
  },
  {
    id: 6,
    text: '復習のタイミングは？',
    options: [
      { id: 'A', label: '完全に理解するまで繰り返す', type: 'forest'  },
      { id: 'B', label: '友達をクイズ形式で', type: 'meadow'  },
      { id: 'C', label: '忘却曲線に基づいて計画的に', type: 'bamboo'  },
    ],
  },
  {
    id: 7,
    text: '学習の記録は？',
    options: [
      { id: 'A', label: '詳細な学習ノートを作成', type: 'forest' },
      { id: 'B', label: 'SNSで仲間と共有', type: 'meadow' },
      { id: 'C', label: 'アプリで効率的に管理', type: 'bamboo' },
    ],
  },
  {
    id: 8,
    text: '新しい単語を覚える方法は？',
    options: [
      { id: 'A', label: '語源や関連語を深く調べる', type: 'forest' },
      { id: 'B', label: '友達と例文を作り合う', type: 'meadow' },
      { id: 'C', label: '頻出順に効率的に暗記', type: 'bamboo' },
    ],
  },
  {
    id: 9,
    text: '学習の成果を確認する方法は？',
    options: [
      { id: 'A', label: '自分でテストを作って解く', type: 'forest' },
      { id: 'B', label: '友達と問題を出し合う', type: 'meadow' },
      { id: 'C', label: 'アプリの統計データを確認', type: 'bamboo' },
    ],
  },
  {
    id: 10,
    text: '理想的な学習仲間は？',
    options: [
      { id: 'A', label: 'お互いを尊重し合える人', type: 'forest' },
      { id: 'B', label: '一緒に楽しく学べる人', type: 'meadow' },
      { id: 'C', label: '目標を共有できる人', type: 'bamboo' },
    ],
  },
]
