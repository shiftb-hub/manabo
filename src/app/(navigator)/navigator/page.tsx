'use client'

import { NavigatorContent } from '../_components/NavigatorContent'

export default function ScreenNavigator() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
      <div className='container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-md pb-20 sm:pb-24'>
        <NavigatorContent />
      </div>
    </div>
  )
}
