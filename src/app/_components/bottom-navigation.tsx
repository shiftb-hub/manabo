'use client'

import { BookOpen, Home, Trophy, User, Users } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function BottomNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { href: '/navigator', label: 'ナビゲーター', icon: BookOpen },
    { href: '/dashboard', label: 'ダッシュボード', icon: Home },
    { href: '/timeline', label: 'タイムライン', icon: Users },
    { href: '/ranking', label: 'ランキング', icon: Trophy },
    { href: '/mypage', label: 'マイページ', icon: User },
  ]

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-green-100 px-4 py-2 safe-area-pb z-50'>
      <div className='flex justify-around max-w-md mx-auto'>
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href

          return (
            <button
              type='button'
              key={href}
              onClick={() => {
                router.push(href)
              }}
              className={`group flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 text-xs transform transition-all duration-300 ease-out
                ${
                  isActive
                    ? 'bg-gradient-to-t from-green-400 to-green-100 text-green-900 scale-105 shadow-lg'
                    : 'text-gray-400 hover:bg-gray-100 hover:scale-100'
                }`}
            >
              <Icon
                className={`w-6 h-6 transition-all duration-300 ease-out ${
                  isActive ? 'translate-y-[-2px] opacity-100' : 'opacity-80'
                }`}
              />
              <span
                className={`transition-all duration-300 ease-out ${
                  isActive ? 'font-semibold text-[13px]' : 'text-[12px]'
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
