'use client'

import { Search } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'

import { NavigatorCard } from './NavigatorCard'
import { NoResultsCard } from './NoResultsCard'
import { TagFilter } from './TagFilter'
import { categories, screens } from '../../_constants/navigatorData'
import { useNavigatorFilter } from '../../_hooks/useNavigatorFilter'
import { NavigatorHeader } from '../NavigatorHeader'
import { QuickActions } from './QuickActions'

export const NavigatorContent = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredScreens,
    clearFilters,
  } = useNavigatorFilter(screens)

  return (
    <>
      <NavigatorHeader />
      <div className='mb-6'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
          <Input
            placeholder='画面を検索...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='pl-10 border-green-200 focus:border-green-400 rounded-xl'
          />
        </div>
      </div>

      <TagFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <QuickActions />

      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-gray-800'>
            画面一覧 ({filteredScreens.length})
          </h2>
          {searchQuery && (
            <Button
              type='button'
              variant='ghost'
              size='sm'
              onClick={() => setSearchQuery('')}
              className='text-gray-500'
            >
              クリア
            </Button>
          )}
        </div>

        {filteredScreens.length > 0 && (
          <div className='mt-4 space-y-4'>
            {filteredScreens.map(screen => (
              <NavigatorCard key={screen.id} screen={screen} />
            ))}
          </div>
        )}
      </div>

      {filteredScreens.length === 0 && (
        <NoResultsCard onResetFilters={clearFilters} />
      )}

      <Card className='mt-6 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200'>
        <CardContent className='p-4'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-emerald-800'>
                Manaboの機能
              </p>
              <p className='text-xs text-emerald-600'>
                すべての画面を体験してみましょう
              </p>
            </div>
            <div className='text-right'>
              <p className='text-2xl font-bold text-emerald-700'>
                {screens.length}
              </p>
              <p className='text-xs text-emerald-600'>画面</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
