// アプリケーション内のルートパスを管理する定数ファイル

export const PATHS = {
  // 認証関連
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    VERIFY_EMAIL: '/verify-email',
  },

  // ダッシュボード
  DASHBOARD: '/dashboard',

  // ナビゲーター
  NAVIGATOR: '/navigator',

  // ランキング
  RANKING: '/ranking',

  // タイムライン
  TIMELINE: '/timeline',

  // マイページ
  MYPAGE: '/mypage',

  // 学習関連
  LEARNING: {
    RECORDS: '/learningRecords',
    STYLE: '/learning-style',
  },

  // SNS関連
  SNS: {
    GENERATOR: '/sns-generator',
  },

  // 通知・設定
  NOTIFICATION: {
    SETTINGS: '/notification-settings',
    MOTIVATION: '/motivation-notification',
  },

  // 情報
  INFO: {
    FEATURE_SHOWCASE: '/feature-showcase',
  },

  // 法的ページ
  LEGAL: {
    PRIVACY: '/privacy',
    TERMS: '/terms',
  },
} as const
