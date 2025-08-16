'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

import { MotivationCard } from './_components/MotivationCard'
import { PeriodTabs } from './_components/PeriodTabs'
import { RankingDisabledCard } from './_components/RankingDisabledCard'
import RankingLayout from './_components/RankingLayout'
import { RankingList } from './_components/RankingList'
import { YourRankCard } from './_components/YourRankCard'
import { useRanking } from './_hooks/useRanking'
import type { RankingPeriod } from './_types/rankingTypes'
import { useStreak } from '../../(dashboard)/dashboard/_hooks/useStreak'

export default function RankingPage() {
  const router = useRouter()
  const [showRanking, setShowRanking] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<RankingPeriod>('week')

  const { items, currentUser, loading, error } = useRanking(selectedPeriod)
  const { streakCount } = useStreak()

  // 自分の行の streak を上書き（name で同定／必要なら rank 等に変更）
  const usersForList = useMemo(() => {
    // 変更前: if (!currentUser || !streakCount) return items
    if (!currentUser || streakCount == null) return items
    return items.map((u) =>
      u.name === currentUser.name ? { ...u, streak: streakCount, isCurrentUser: true as const } : u,
    )
  }, [items, currentUser, streakCount])

  const currentUserForCard = useMemo(
    // 変更前: streak: streakCount || currentUser.streak
    () => (currentUser ? { ...currentUser, streak: streakCount ?? currentUser.streak } : null),
    [currentUser, streakCount],
  )

  return (
    <RankingLayout
      onNavigate={(screen) => {
        if (screen === 'dashboard') router.push('/dashboard')
      }}
      showRanking={showRanking}
      onToggleRanking={setShowRanking}
    >
      {showRanking ? (
        <>
          <div className="mb-6">
            <PeriodTabs value={selectedPeriod} onChange={setSelectedPeriod} />
          </div>

          {loading && <div className="mb-4 text-sm text-gray-500">読み込み中...</div>}
          {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
          {!loading && items.length === 0 && (
            <div className="mb-4 text-sm text-gray-500">ランキングデータがありません</div>
          )}

          {currentUserForCard && <YourRankCard user={currentUserForCard} />}
          {usersForList.length > 0 && <RankingList users={usersForList} period={selectedPeriod} />}
          <MotivationCard period={selectedPeriod} />
        </>
      ) : (
        <RankingDisabledCard onShow={() => setShowRanking(true)} />
      )}
    </RankingLayout>
  )
}
