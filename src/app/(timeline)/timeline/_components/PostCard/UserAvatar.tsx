import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/app/_components/ui/avatar'

export const UserAvatar = ({ avatar }: { avatar: string }) => (
  <Avatar className='w-12 h-12'>
    <AvatarImage src={`/placeholder.svg?height=48&width=48&query=${avatar}`} />
    <AvatarFallback className='bg-green-100 text-green-600 font-medium'>{avatar}</AvatarFallback>
  </Avatar>
)
