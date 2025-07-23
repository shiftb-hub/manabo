'use client'
import { Category } from '@prisma/client'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { LearningRecordSchema } from '../_utils/learningRecordSchema'

interface CategorySelectProps {
  categories: Category[]
  register: UseFormRegister<LearningRecordSchema>
  errors: FieldErrors<LearningRecordSchema>
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  register,
  errors,
}) => {
  return (
    <div>
      <label
        className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700'
        htmlFor='categoryId'
      >
        学習カテゴリ
      </label>
      <select
        id='categoryId'
        {...register('categoryId')}
        className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
        defaultValue=''
      >
        <option value='' disabled>
          カテゴリを選択してください
        </option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {/* 出力はcategoryName */}
            {category.categoryName}
          </option>
        ))}
      </select>
      {errors.categoryId?.message && (
        <p className='text-red-500 pt-1 pl-4 text-sm'>
          {errors.categoryId.message}
        </p>
      )}
    </div>
  )
}
