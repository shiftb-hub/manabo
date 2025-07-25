'use client'

import Link from 'next/link'

import { Badge } from '@/app/_components/ui/badge'
import { Card, CardContent } from '@/app/_components/ui/card'

import type { NavigatorItem } from '../../_types/navigatorTypes'

interface Props {
  screen: NavigatorItem
}

export const NavigatorCard = ({ screen }: Props) => {
  const Icon = screen.icon

  return (
    <Link
      href={screen.href}
      className='block'
      aria-label={`${screen.title}画面に移動`}
    >
      <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]'>
        <CardContent className='p-4'>
          <div className='flex items-start space-x-4'>
            <div
              className={`w-12 h-12 bg-gradient-to-br ${screen.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <Icon
                className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                aria-hidden='true'
              />
            </div>

            <div className='flex-1 min-w-0'>
              <h3 className='text-lg font-bold text-gray-800 mb-1'>
                {screen.title}
              </h3>
              <p className='text-sm text-gray-600 mb-2 sm:mb-3'>
                {screen.description}
              </p>

              <div className='flex flex-wrap gap-1'>
                {screen.features.map((feature, idx) => (
                  <Badge
                    key={`${screen.id}-feature-${idx}`}
                    variant='outline'
                    className='border-green-200 text-green-600 text-xs'
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
