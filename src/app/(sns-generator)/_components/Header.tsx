import { ArrowLeft } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

interface HeaderProps {
  onNavigate: (screen: string) => void
}

export const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <div className='flex items-center mb-6'>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => onNavigate('dashboard')}
        className='mr-3 p-2'
      >
        <ArrowLeft className='w-5 h-5 text-black' />
      </Button>
      <h1 className='text-xl font-bold text-gray-800'>SNS投稿作成</h1>
    </div>
  )
}
