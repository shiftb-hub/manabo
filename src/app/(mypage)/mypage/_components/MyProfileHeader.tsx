import { Users } from 'lucide-react'

export function MyProfileHeader() {
  return (
    <div className='flex items-center space-x-4 mb-4'>
      <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center'>
        <Users className='w-6 h-6 text-white' />
      </div>
      <div>
        <h2 className='text-lg font-semibold text-white'>田中 太郎</h2>
        <p className='text-sm text-white/80'>tanaka@example.com</p>
      </div>
    </div>
  )
}
