import type { ReactNode } from 'react'

import { RankingHeader } from './RankingHeader'
import { RankingToggleCard } from './RankingToggleCard'

interface RankingLayoutProps {
  onNavigate: (screen: string) => void
  showRanking: boolean
  onToggleRanking: (checked: boolean) => void
  children: ReactNode
}

export default function RankingLayout({
  onNavigate,
  showRanking,
  onToggleRanking,
  children,
}: RankingLayoutProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
      <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
        <RankingHeader onBack={() => onNavigate('dashboard')} />
        <RankingToggleCard checked={showRanking} onToggle={onToggleRanking} />
        {children}
      </div>
    </div>
  )
}
