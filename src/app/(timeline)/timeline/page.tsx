'use client'

import { useState } from 'react'

import { Header } from './_components/Header'
import { PostList } from './_components/PostList'
import { SearchInput } from './_components/SearchInput'
import { timelinePosts } from './_constants/timelinePosts'

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([])

  const filteredPosts = timelinePosts.filter(
    post =>
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
      <Header />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <PostList
        posts={filteredPosts}
        likedPosts={likedPosts}
        bookmarkedPosts={bookmarkedPosts}
        onLike={(id: number) => {
          setLikedPosts(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
          )
        }}
        onBookmark={(id: number) => {
          setBookmarkedPosts(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
          )
        }}
      />
    </div>
  )
}
