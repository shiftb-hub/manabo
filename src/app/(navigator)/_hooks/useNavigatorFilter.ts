import { useMemo, useState } from 'react'

import type { NavigatorItem } from '../_types/navigatorTypes'

interface NavigatorFilterReturn {
  searchQuery: string
  selectedCategory: string | null
  filteredScreens: NavigatorItem[]
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string | null) => void
  clearFilters: () => void
}

/**
 * ナビゲーターのフィルタリング機能を管理するフック
 * @param screens - フィルタリング対象の画面一覧
 * @returns フィルタリング状態と操作関数
 */

export const useNavigatorFilter = (screens: NavigatorItem[]): NavigatorFilterReturn => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>('all')

  const filteredScreens = useMemo(() => {
    return screens.filter((screen) => {
      const matchesSearch =
        screen.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        screen.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' ||
        selectedCategory === null ||
        screen.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [screens, searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  return {
    searchQuery,
    selectedCategory,
    filteredScreens,
    setSearchQuery,
    setSelectedCategory,
    clearFilters,
  }
}
