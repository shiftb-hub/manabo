'use client'

import { Tabs, TabsList, TabsTrigger } from '@/app/_components/ui/tabs'

import { RankingPeriod } from '../_types/rankingTypes'

interface PeriodTabsProps {
  value: RankingPeriod
  onChange: (value: RankingPeriod) => void
}

export function PeriodTabs({ value, onChange }: PeriodTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={val => onChange(val as RankingPeriod)}
      className='w-full'
    >
      <TabsList className='grid grid-cols-3 w-full rounded-xl border border-green-100 bg-white dark:bg-white p-1'>
        <TabsTrigger
          value='day'
          className='text-sm rounded-lg py-1 transition-colors data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:bg-[#f0fdf4] data-[state=inactive]:text-gray-500'
        >
          日
        </TabsTrigger>
        <TabsTrigger
          value='week'
          className='text-sm rounded-lg py-1 transition-colors data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:bg-[#f0fdf4] data-[state=inactive]:text-gray-500'
        >
          週
        </TabsTrigger>
        <TabsTrigger
          value='month'
          className='text-sm rounded-lg py-1 transition-colors data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:bg-[#f0fdf4] data-[state=inactive]:text-gray-500'
        >
          月
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
