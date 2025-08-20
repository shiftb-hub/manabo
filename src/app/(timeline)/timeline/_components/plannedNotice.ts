// クリックしたら「今後実装予定」を知らせる軽量ヘルパー
export function planned(feature: string) {
  if (typeof window === 'undefined') return

  const msg = `「${feature}」は今後実装予定です。リリースまで少々お待ちください。`
  // 将来トーストに差し替えやすいように一箇所に集約
  window.alert(msg)
}
