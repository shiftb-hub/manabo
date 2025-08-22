import type { ReactNode } from 'react'

export default function RankingLayoutWrapper({ children }: { children: ReactNode }) {
  return <div className='min-h-screen bg-gradient-to-b from-green-50 to-white'>{children}</div>
}
