'use client'

import { Button } from '@/app/_components/ui/button'

import type { Category } from '../../_types/navigatorTypes'

interface Props {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export const TagFilter = ({ categories, selectedCategory, onCategoryChange }: Props) => {
  return (
    <div className='mb-6'>
      <div className='flex flex-wrap gap-2'>
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = selectedCategory === category.id
          return (
            <Button
              type='button'
              key={category.id}
              variant={isActive ? 'default' : 'outline'}
              size='sm'
              onClick={() => onCategoryChange(category.id)}
              className={`${
                isActive
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'border-green-200 text-green-700 hover:bg-green-50'
              } rounded-xl`}
            >
              <Icon className='w-3 h-3 mr-1' />
              {category.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
