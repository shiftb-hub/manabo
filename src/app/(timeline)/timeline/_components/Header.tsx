import { Filter } from 'lucide-react'

export function TimelineHeader() {
  return (
    <div className='flex items-center justify-between mb-4'>
      <h2 className='text-lg font-semibold text-gray-800'>タイムライン</h2>
      <Filter className='w-5 h-5 text-green-600' />
    </div>
  )
}
