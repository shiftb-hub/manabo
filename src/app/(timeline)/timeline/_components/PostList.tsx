import { Search } from 'lucide-react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { PostCard } from './PostCard'
import { TimelinePost } from '../_types/types'

interface Props {
  posts: TimelinePost[]
  likedPosts: number[]
  bookmarkedPosts: number[]
  onLike: (id: number) => void
  onBookmark: (id: number) => void
}

export function PostList({
  posts,
  likedPosts,
  bookmarkedPosts,
  onLike,
  onBookmark,
}: Props) {
  if (posts.length === 0) {
    return (
      <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
        <CardContent className='p-8 text-center'>
          <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <Search className='w-8 h-8 text-green-600' />
          </div>
          <p className='text-gray-600 mb-2'>検索結果が見つかりませんでした</p>
          <p className='text-sm text-gray-500'>
            別のキーワードで検索してみてください
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='space-y-4'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          isLiked={likedPosts.includes(post.id)}
          isBookmarked={bookmarkedPosts.includes(post.id)}
          onLike={() => onLike(post.id)}
          onBookmark={() => onBookmark(post.id)}
        />
      ))}
    </div>
  )
}
