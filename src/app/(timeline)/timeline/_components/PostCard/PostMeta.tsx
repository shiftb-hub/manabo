import React from 'react'

import { Badge } from '@/app/_components/ui/badge'

import { TimelinePost } from '../../_types/types'

export const PostMeta = ({ post }: { post: TimelinePost }) => {
  const metaBadges = [
    { label: post.category, className: 'bg-green-100 text-green-700' },
    {
      label: `${post.time}時間`,
      className: 'border-emerald-200 text-emerald-600',
      outline: true,
    },
    {
      label: `${post.user.studyStreak}日連続`,
      className: 'border-yellow-200 text-yellow-600',
      outline: true,
    },
  ]

  return (
    <div className='flex items-center space-x-2 mb-2'>
      {metaBadges.map((badge, i) => (
        <Badge
          key={i}
          variant={badge.outline ? 'outline' : undefined}
          className={`text-xs ${badge.className}`}
        >
          {badge.label}
        </Badge>
      ))}
    </div>
  )
}
