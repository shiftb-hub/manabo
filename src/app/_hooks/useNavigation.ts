import { useRouter } from 'next/navigation'

type NavigationFunctions = {
  onNavigateToSignup: () => void
  onNavigateToPasswordReset: () => void
  onBack: () => void
}

export const useNavigation = (): NavigationFunctions => {
  const router = useRouter()

  const onNavigateToSignup = () => {
    router.push('/signup') // サインアップページに遷移
  }

  const onNavigateToPasswordReset = () => {
    // パスワードリセットのページに遷移
  }

  const onNavigateToDashboard = () => {
    router.push('/dashboard') // ダッシュボードページに遷移
  }

  const onBack = () => {
    router.back() // 前のページに戻る
  }

  return {
    onNavigateToSignup,
    onNavigateToPasswordReset,
    onBack,
  }
}
