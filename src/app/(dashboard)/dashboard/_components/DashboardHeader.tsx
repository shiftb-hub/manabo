import { Settings } from 'lucide-react'

import { ManaboIcon } from '@/app/_components/manabo-icon'
import { Button } from '@/app/_components/ui/button'
import { useSession } from '@/app/_hooks/useSession'
// interface Props{
//   nickname?: string
// }

export const DashboardHeader = () => {
  const { user, isLoading } = useSession()
  if (isLoading) {
    return 'loading...'
  }
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-3">
        <ManaboIcon size="md" />
        <div>
          <h1 className="text-xl font-bold text-gray-800">{user && `おはよう、${user}さん！`}</h1>
          <p className="text-sm text-gray-600">今日も学習を頑張りましょう</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="text-gray-400">
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  )
}
