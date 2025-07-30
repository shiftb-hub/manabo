import { TimelinePost } from '../_types/types'

export const timelinePosts: TimelinePost[] = [
  {
    id: 1,
    user: {
      name: '山田 花子',
      avatar: 'YH',
      studyStreak: 8,
      learningStyle: '森グループ',
    },
    category: '英語',
    time: 1.5,
    content:
      'TOEIC対策の単語学習を進めました。今日は新しい単語を50個覚えることができました！継続は力なりですね。',
    timestamp: '2時間前',
    likes: 12,
    comments: 3,
    isFollowing: false,
  },
  {
    id: 2,
    user: {
      name: '佐藤 太郎',
      avatar: 'ST',
      studyStreak: 23,
      learningStyle: '草原グループ',
    },
    category: 'プログラミング',
    time: 3,
    content:
      'React Hooksの学習を深掘りしました。useEffectの依存配列について理解が深まり、実際のプロジェクトで活用できそうです。',
    timestamp: '4時間前',
    likes: 18,
    comments: 7,
    isFollowing: true,
  },
  {
    id: 3,
    user: {
      name: '田中 美咲',
      avatar: 'TM',
      studyStreak: 12,
      learningStyle: '竹林グループ',
    },
    category: '資格勉強',
    time: 2,
    content:
      '簿記2級の勉強を継続中。今日は工業簿記の原価計算について学習しました。難しいですが、少しずつ理解できてきています。',
    timestamp: '6時間前',
    likes: 9,
    comments: 2,
    isFollowing: false,
  },
  {
    id: 4,
    user: {
      name: '鈴木 健太',
      avatar: 'SK',
      studyStreak: 5,
      learningStyle: '森グループ',
    },
    category: 'デザイン',
    time: 2.5,
    content:
      'Figmaを使ったUI/UXデザインの学習。今日はプロトタイプ作成の基本を学びました。実際に手を動かすと理解が深まりますね！',
    timestamp: '8時間前',
    likes: 15,
    comments: 5,
    isFollowing: false,
  },
]
