// src/app/(timeline)/timeline/_components/PostCard/PostActions.tsx
import { Bookmark, Heart, MessageCircle } from 'lucide-react'
import React from 'react'

import { ActionButton } from './ActionButton'
import { planned } from '../plannedNotice'

interface Props {
  likes: number
  comments: number
  isLiked: boolean
  isBookmarked: boolean
  onLike: () => void
  onBookmark: () => void
}

export const PostActions = ({
  likes,
  comments,
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
}: Props) => (
  <div className='flex items-center justify-between pt-3 border-t border-gray-100'>
    <div className='flex items-center space-x-4'>
      <ActionButton
        icon={<Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />}
        label={`${likes + (isLiked ? 1 : 0)}`}
        active={isLiked}
        activeColor='text-red-500'
        hoverColor='hover:text-red-500'
        onClick={onLike} // 親から planned を渡せば案内表示に
      />
      <ActionButton
        icon={<MessageCircle className='w-4 h-4 mr-1' />}
        label={`${comments}`}
        hoverColor='hover:text-blue-500'
        onClick={() => planned('コメント')} // 追加：コメント押下で案内表示
      />
    </div>
    <ActionButton
      icon={<Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />}
      label=''
      active={isBookmarked}
      activeColor='text-yellow-500'
      hoverColor='hover:text-yellow-500'
      onClick={onBookmark} // 親から planned を渡せば案内表示に
    />
  </div>
)
