'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { MotivationCard } from './_components/MotivationCard'
import { PeriodTabs } from './_components/PeriodTabs'
import { RankingDisabledCard } from './_components/RankingDisabledCard'
import RankingLayout from './_components/RankingLayout'
import { RankingList } from './_components/RankingList'
import { YourRankCard } from './_components/YourRankCard'
import { RANKING_DATA } from './_constants/mockRankingData'
import { RankingPeriod } from './_types/rankingTypes'

export default function RankingPage() {
  const router = useRouter()
  const [showRanking, setShowRanking] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<RankingPeriod>('week')

  const currentRanking = RANKING_DATA[selectedPeriod]
  const currentUser = currentRanking.find(user => user.isCurrentUser)

  return (
    <RankingLayout
      onNavigate={screen => {
        if (screen === 'dashboard') router.push('/dashboard')
      }}
      showRanking={showRanking}
      onToggleRanking={setShowRanking}
    >
      {showRanking ? (
        <>
          <div className='mb-6'>
            <PeriodTabs value={selectedPeriod} onChange={setSelectedPeriod} />
          </div>
          {currentUser && <YourRankCard user={currentUser} />}
          <RankingList users={currentRanking} period={selectedPeriod} />
          <MotivationCard period={selectedPeriod} />
        </>
      ) : (
        <RankingDisabledCard onShow={() => setShowRanking(true)} />
      )}
    </RankingLayout>
  )
}
