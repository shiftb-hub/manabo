import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

export function Header() {
  return (
    <div className='flex items-center justify-between mb-6'>
      <h1 className='text-xl font-bold text-gray-800'>タイムライン</h1>
      <Button variant='ghost' size='sm' className='text-green-600'>
        <MoreHorizontal className='w-5 h-5' />
      </Button>
    </div>
  )
}
