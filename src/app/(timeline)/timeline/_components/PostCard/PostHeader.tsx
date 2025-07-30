import { UserPlus } from 'lucide-react'
import React from 'react'

import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'

import { TimelinePost } from '../../_types/types'

export const PostHeader = ({ post }: { post: TimelinePost }) => (
  <div className='flex items-center justify-between mb-2'>
    <div>
      <p className='font-medium text-gray-800'>{post.user.name}</p>
      <div className='flex items-center space-x-2'>
        <p className='text-xs text-gray-500'>{post.timestamp}</p>
        <Badge
          variant='outline'
          className='text-xs border-green-200 text-green-600'
        >
          {post.user.learningStyle}
        </Badge>
      </div>
    </div>
    <Button
      type='button'
      variant='ghost'
      size='sm'
      className={`text-xs ${post.isFollowing ? 'text-gray-500' : 'text-green-600'}`}
    >
      <UserPlus className='w-4 h-4 mr-1' />
      {post.isFollowing ? 'フォロー中' : 'フォロー'}
    </Button>
  </div>
)
