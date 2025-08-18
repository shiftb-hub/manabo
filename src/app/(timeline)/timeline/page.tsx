// src/app/(timeline)/timeline/page.tsx
'use client'

import { useMemo, useState } from 'react'

import { TimelineHeader } from './_components/Header'
import { PostList } from './_components/PostList'
import { SearchInput } from './_components/SearchInput'
import { useTimelinePosts } from './_hooks/useTimeline'

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([])

  const { posts, isLoading, error } = useTimelinePosts()

  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return posts.filter(
      (post) =>
        post.user.name.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q),
    )
  }, [posts, searchQuery])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-md pb-24">
        <TimelineHeader />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <p className="text-sm text-gray-500 mt-4">読み込み中…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-md pb-24">
        <TimelineHeader />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <p className="text-sm text-red-600 mt-4">タイムラインの取得に失敗しました。</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-md pb-24">
      <TimelineHeader />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <PostList
        posts={filteredPosts}
        likedPosts={likedPosts}
        bookmarkedPosts={bookmarkedPosts}
        onLike={(id: number) => {
          setLikedPosts((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
          )
        }}
        onBookmark={(id: number) => {
          setBookmarkedPosts((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
          )
        }}
      />
    </div>
  )
}
