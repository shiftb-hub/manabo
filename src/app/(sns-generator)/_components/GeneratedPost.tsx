import { Copy, Share } from 'lucide-react'

import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'

import type { Tone } from '../_types'

interface GeneratedPostProps {
  post: string
  index: number
  selectedTone: Tone
  copiedIndex: number | null
  onCopy: (text: string, index: number) => void
}

export const GeneratedPost = ({
  post,
  index,
  selectedTone,
  copiedIndex,
  onCopy,
}: GeneratedPostProps) => {
  return (
    <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardHeader className='pb-3'>
        <div className='flex items-center justify-between'>
          <Badge variant='outline' className='border-green-200 text-green-600'>
            案{index + 1}
          </Badge>
          <Badge className='bg-green-100 text-green-700 font-semibold'>{selectedTone}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className='bg-gray-50 rounded-xl p-4 mb-4'>
          <p className='text-sm font-medium text-gray-900 whitespace-pre-line'>{post}</p>
        </div>
        <div className='flex space-x-2'>
          <Button
            variant='outline'
            size='sm'
            className='flex-1 rounded-xl border-green-200 text-green-700 hover:bg-green-50'
            onClick={() => onCopy(post, index)}
          >
            <Copy className='w-4 h-4 mr-1' />
            {copiedIndex === index ? 'コピー済み' : 'コピー'}
          </Button>
          <Button
            size='sm'
            className='flex-1 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
          >
            <Share className='w-4 h-4 mr-1' />
            シェア
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
