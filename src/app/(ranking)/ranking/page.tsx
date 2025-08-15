'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { MotivationCard } from './_components/MotivationCard'
import { PeriodTabs } from './_components/PeriodTabs'
import { RankingDisabledCard } from './_components/RankingDisabledCard'
import RankingLayout from './_components/RankingLayout'
import { RankingList } from './_components/RankingList'
import { YourRankCard } from './_components/YourRankCard'
import { useRanking } from './_hooks/useRanking'
import type { RankingPeriod } from './_types/rankingTypes'

export default function RankingPage() {
  const router = useRouter()
  const [showRanking, setShowRanking] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<RankingPeriod>('week')

  const { items, currentUser, loading, error } = useRanking(selectedPeriod)
  // eslint-disable-next-line no-console
  console.log('RankingPage', {
    itemsLen: items.length,
    hasCurrent: Boolean(currentUser),
    loading,
    error,
  })

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

          {currentUser && <YourRankCard user={currentUser} />}
          {items.length > 0 && <RankingList users={items} period={selectedPeriod} />}
          <MotivationCard period={selectedPeriod} />
        </>
      ) : (
        <RankingDisabledCard onShow={() => setShowRanking(true)} />
      )}
    </RankingLayout>
  )
}
