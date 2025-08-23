import { RefreshCw } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

import { GeneratedPost } from './GeneratedPost'
import type { Tone } from '../_types'

interface PostListProps {
  posts: string[]
  selectedTone: Tone
  copiedIndex: number | null
  onCopy: (text: string, index: number) => void
}

export const PostList = ({ posts, selectedTone, copiedIndex, onCopy }: PostListProps) => {
  return (
    <div className='space-y-4 mb-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-gray-800'>AI生成投稿案</h2>
        <Button variant='ghost' size='sm' className='text-green-600'>
          <RefreshCw className='w-4 h-4 mr-1' />
          再生成
        </Button>
      </div>

      {posts.map((post, index) => (
        <GeneratedPost
          key={index}
          post={post}
          index={index}
          selectedTone={selectedTone}
          copiedIndex={copiedIndex}
          onCopy={onCopy}
        />
      ))}
    </div>
  )
}

