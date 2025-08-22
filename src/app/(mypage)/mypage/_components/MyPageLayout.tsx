'use client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { signOut } from '@/app/_utils/auth/signOut'

import { MyPageHeader } from './MyPageHeader'
import { MyPageMenu } from './MyPageMenu'
import { MyProfileHeader } from './MyProfileHeader'

export const MyPageLayout = () => {
  const router = useRouter()

  // ナビゲーションの処理（仮）
  const handleNavigate = (): void => {
    // TODO: 実装例（ルーターを使う場合）
    // router.push(`/mypage/${screen}`);
  }

  // ログアウト処理
  const handleLogout = async () => {
    const result = await signOut()
    if (result === null) {
      toast.success('ログアウトしました')
      router.replace('/login')
    } else {
      toast.error(`ログアウトエラー: ${result}`)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
      <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
        {/* マイページヘッダー */}
        <MyPageHeader onNavigate={handleNavigate} onLogout={handleLogout} />

        {/* プロフィールとメニュー */}
        <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg rounded-lg p-6'>
          <MyProfileHeader />
          <MyPageMenu />
        </div>
      </div>
    </div>
  )
}
