import { useRouter } from 'next/navigation'

type NavigationFunctions = {
  onNavigateToDashboard: () => void
  onNavigateToSignup: () => void
  onNavigateToPasswordReset: () => void
  onNavigateToDashboard: () => void
  onBack: () => void
}

export const useNavigation = (): NavigationFunctions => {
  const router = useRouter()

  const onNavigateToDashboard = () => {
    router.push('/dashboard') // ダッシュボードに遷移
  }

  const onNavigateToSignup = () => {
    router.push('/signup') // サインアップページに遷移
  }

  const onNavigateToPasswordReset = () => {
    router.push('/password-reset') // パスワードリセットページに遷移（必要に応じてURL調整）
  }

  const onBack = () => {
    router.back() // 前のページに戻る
  }

  return {
    onNavigateToDashboard,
    onNavigateToSignup,
    onNavigateToPasswordReset,
    onNavigateToDashboard,
    onBack,
  }
}
