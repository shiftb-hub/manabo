import { LearningType } from '@/app/(learning-style)/_types/learningType'

export const LEARNING_TYPES: Record<string, LearningType> = {
  forest: {
    type: 'forest',
    name: '🌲 森グループ',
    icon: '🌲',
    description: '集中型・深掘り学習スタイル',
    characteristics: ['一人の時間を大切にする', '深く理解することを重視', '静かな環境を好む', '自分のペースで学習'],
    recommendations: ['図書館や個室での学習', '詳細なノート作成', '語源や背景知識の学習', '長時間の集中学習'],
    compatibleUsers: [
      { name: 'みどりさん', level: 'N3', studyTime: '2時間/日' },
      { name: 'たけしさん', level: 'N2', studyTime: '3時間/日' },
      { name: 'さくらさん', level: 'N4', studyTime: '1.5時間/日' },
    ],
  },
  meadow: {
    type: 'meadow',
    name: '🌸 草原グループ',
    icon: '🌸',
    description: '社交型・協働学習スタイル',
    characteristics: ['仲間と一緒に学ぶのが好き', 'コミュニケーションを重視', '楽しい雰囲気を好む', '教え合いで成長'],
    recommendations: ['グループ学習の参加', 'SNSでの学習記録共有', '会話練習の重視', '学習仲間との交流'],
    compatibleUsers: [
      { name: 'ゆうきさん', level: 'N3', studyTime: '1時間/日' },
      { name: 'あいさん', level: 'N2', studyTime: '2時間/日' },
      { name: 'けんじさん', level: 'N4', studyTime: '1.5時間/日' },
    ],
  },
  bamboo: {
    type: 'bamboo',
    name: '🎋 竹林グループ',
    icon: '🎋',
    description: '効率型・目標達成スタイル',
    characteristics: ['効率的な学習を重視', '明確な目標設定', 'データに基づく学習', '計画的な進歩'],
    recommendations: ['アプリを活用した学習', '統計データの活用', '短時間集中学習', '定期的な進捗確認'],
    compatibleUsers: [
      { name: 'りょうさん', level: 'N2', studyTime: '1.5時間/日' },
      { name: 'まなさん', level: 'N3', studyTime: '2時間/日' },
      { name: 'ひろしさん', level: 'N1', studyTime: '3時間/日' },
    ],
  },
}
