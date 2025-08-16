'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { ActionButton } from './_components/ActionButton'
import { DashboardHeader } from './_components/DashboardHeader'
import { StudyStatus } from './_components/StudyStatus'
import { SummaryBoard } from './_components/SummaryBoard'
import { useTodayStudyTime } from './_hooks/useTodayStudyTime'
import { useWeeklyDaysCount } from './_hooks/useWeeklyDaysCount'

export default function Dashboard() {
  const { todayStudyTime } = useTodayStudyTime()
  const [weeklyGoal] = useState(15)
  const [matchingGroup] = useState('朝活学習者')
  const [onlineGroupMembers] = useState(3)
  const { weeklyDaysCount } = useWeeklyDaysCount()
  const [followingCount] = useState(24)
  const [newNotificationsCount] = useState(3)

  const motivationalMessages = [
    '今日も素晴らしい一日にしましょう！継続は力なりです。',
    '12日連続の学習、本当に素晴らしいです！この調子で頑張りましょう。',
    '朝活学習者の仲間たちも頑張っています。一緒に成長しましょう！',
  ]
  const [currentMessage] = useState(motivationalMessages[1])

  const router = useRouter()
  const onNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-6 max-w-md pb-24">
        <DashboardHeader />
        <StudyStatus
          todayStudyTime={todayStudyTime}
          weeklyGoal={weeklyGoal}
          matchingGroup={matchingGroup}
          onlineGroupMembers={onlineGroupMembers}
          currentMessage={currentMessage}
        />
        <ActionButton onNavigate={onNavigate} />
        <SummaryBoard
          weeklyDaysCount={weeklyDaysCount}
          followingCount={followingCount}
          newNotificationsCount={newNotificationsCount}
        />
      </div>
    </div>
  )
}
