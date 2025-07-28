import { Search } from 'lucide-react'

import { Input } from '@/app/_components/ui/input'

interface Props {
  value: string
  onChange: (val: string) => void
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className='mb-6 relative'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
      <Input
        placeholder='ユーザーや学習内容を検索...'
        value={value}
        onChange={e => onChange(e.target.value)}
        className='text-gray-500 pl-10 border-green-200 focus:border-green-400 rounded-xl placeholder-gray-600'
      />
    </div>
  )
}
