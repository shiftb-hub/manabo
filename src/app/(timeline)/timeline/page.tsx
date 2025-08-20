'use client'

import { useCallback, useDeferredValue, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { TimelineHeader } from './_components/Header'
import { PostList } from './_components/PostList'
import { SearchInput } from './_components/SearchInput'
import { useTimelinePosts } from './_hooks/useTimeline'

function Shell({ children }: { children: ReactNode }) {
  return <div className='container mx-auto px-4 py-6 max-w-md pb-24'>{children}</div>
}

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [likedSet, setLikedSet] = useState<Set<number>>(new Set())
  const [bookmarkedSet, setBookmarkedSet] = useState<Set<number>>(new Set())

  const { posts, isLoading, error } = useTimelinePosts()

  const deferredQuery = useDeferredValue(searchQuery)

  const filteredPosts = useMemo(() => {
    if (!posts?.length) return []
    const q = deferredQuery.trim().toLowerCase()
    if (!q) return posts
    return posts.filter((post) => {
      const name = post.user?.name?.toLowerCase?.() ?? ''
      const category = post.category?.toLowerCase?.() ?? ''
      const content = post.content?.toLowerCase?.() ?? ''
      return name.includes(q) || category.includes(q) || content.includes(q)
    })
  }, [posts, deferredQuery])

  const handleLike = useCallback((id: number) => {
    setLikedSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const handleBookmark = useCallback((id: number) => {
    setBookmarkedSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  if (isLoading) {
    return (
      <Shell>
        <TimelineHeader />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <p className='text-sm text-gray-500 mt-4'>読み込み中…</p>
      </Shell>
    )
  }

  if (error) {
    return (
      <Shell>
        <TimelineHeader />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <p className='text-sm text-red-600 mt-4'>タイムラインの取得に失敗しました。</p>
      </Shell>
    )
  }

  return (
    <Shell>
      <TimelineHeader />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <PostList
        posts={filteredPosts}
        likedPosts={Array.from(likedSet)}
        bookmarkedPosts={Array.from(bookmarkedSet)}
        onLike={handleLike}
        onBookmark={handleBookmark}
      />
    </Shell>
  )
}
