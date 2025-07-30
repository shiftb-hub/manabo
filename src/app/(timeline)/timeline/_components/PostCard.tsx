'use client'

import React from 'react'

import { Card, CardContent } from '@/app/_components/ui/card'

import { TimelinePost } from '../_types/types'
import { PostActions } from './PostCard/PostActions'
import { PostContent } from './PostCard/PostContent'
import { PostHeader } from './PostCard/PostHeader'
import { PostMeta } from './PostCard/PostMeta'
import { UserAvatar } from './PostCard/UserAvatar'

interface Props {
  post: TimelinePost
  isLiked: boolean
  isBookmarked: boolean
  onLike: () => void
  onBookmark: () => void
}

export function PostCard({
  post,
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
}: Props) {
  return (
    <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardContent className='p-4'>
        <div className='flex items-start space-x-3'>
          <UserAvatar avatar={post.user.avatar} />
          <div className='flex-1'>
            <PostHeader post={post} />
            <PostMeta post={post} />
            <PostContent content={post.content} />
            <PostActions
              likes={post.likes}
              comments={post.comments}
              isLiked={isLiked}
              isBookmarked={isBookmarked}
              onLike={onLike}
              onBookmark={onBookmark}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
