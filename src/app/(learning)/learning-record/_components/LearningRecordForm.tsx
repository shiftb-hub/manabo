'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Category } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { supabase } from '@/app/_lib/supabaseClient'
import { api } from '@/app/_utils/api'

import { CategorySelect } from './CategorySelect'
import {
  CreateLearningRecordRequestBody,
  CreateLearningRecordResponseBody,
} from '../_types/learningRecords'
import {
  LearningRecord,
  learningRecordSchema,
} from '../_utils/learningRecordSchema'

interface LearningRecordFormProps {
  categories: Category[]
}

export const LearningRecordForm: React.FC<LearningRecordFormProps> = ({
  categories,
}) => {
  const router = useRouter()
  const [learningTime, setLearningTime] = useState<number>(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<LearningRecord>({
    resolver: zodResolver(learningRecordSchema),
  })

  //学習時間
  const { startTime, endTime, learningStartDate, learningEndDate } = watch()
  const calculateDurationInMinutes = (
    learningStartDate: string,
    startTime: string,
    learningEndDate: string,
    endTime: string
  ): number => {
    const start = new Date(`${learningStartDate}T${startTime}`)
    const end = new Date(`${learningEndDate}T${endTime}`)

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 0
    }

    const diffMs = end.getTime() - start.getTime()
    return Math.max(0, Math.floor(diffMs / 1000 / 60))
  }

  //学習時間（分）を時間と分で表示
  useEffect(() => {
    if (!learningStartDate || !learningEndDate || !startTime || !endTime) {
      setLearningTime(0)
      return
    }

    const duration = calculateDurationInMinutes(
      learningStartDate,
      startTime,
      learningEndDate,
      endTime
    )
    setLearningTime(duration)
  }, [learningStartDate, startTime, learningEndDate, endTime])

  const formatLearningTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}時間${mins}分`
  }

  const onSubmit: SubmitHandler<LearningRecord> = async data => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      toast.error('ログインが必要です。')
      router.push('/login')
      return
    }
    try {
      const { startTime, endTime } = data

      const requestBody: CreateLearningRecordRequestBody = {
        categoryId: data.categoryId,
        title: data.title,
        content: data.content,
        startTime: new Date(`${data.learningStartDate}T${startTime}`),
        endTime: new Date(`${data.learningEndDate}T${endTime}`),
        duration: learningTime,
        learningDate: new Date(data.learningStartDate),
      }

      await api.post<
        CreateLearningRecordRequestBody,
        CreateLearningRecordResponseBody
      >('/api/learning_records', requestBody)
      toast.success('学習記録を保存しました！🎉')
      reset()

      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`学習記録の保存に失敗しました: ${error.message}`)
        throw new Error(`学習記録の保存に失敗しました: ${error.message}`)
      } else {
        toast.error('予期しないエラーが発生しました。')
        throw new Error('予期しないエラーが発生しました。')
      }
    }
  }

  return (
    <div className=' bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
      <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
        <section className='flex items-center mb-6'>
          <button
            type='button'
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md mr-3 p-2'
            onClick={() => router.push('/dashboard')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-left w-5 h-5'
            >
              <path d='m12 19-7-7 7-7'></path>
              <path d='M19 12H5'></path>
            </svg>
          </button>
          <h2 className='text-xl font-bold text-gray-800'>学習記録</h2>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='rounded-lg border text-card-foreground bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6 pb-4'>
              <h3 className='font-semibold tracking-tight text-lg text-gray-800 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-book-open w-5 h-5 mr-2 text-green-600'
                >
                  <path d='M12 7v14'></path>
                  <path d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'></path>
                </svg>
                今日の学習内容
              </h3>
            </div>
            <div className='p-6 pt-0 space-y-4'>
              <div>
                <CategorySelect
                  categories={categories}
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <label htmlFor='title'>タイトル</label>
                <input
                  id='title'
                  type='text'
                  {...register('title')}
                  className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
                />
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.title?.message}
                </p>
              </div>
              <div>
                <label htmlFor='learningStartDate'>学習開始日</label>
                <input
                  id='learningStartDate'
                  type='date'
                  {...register('learningStartDate')}
                  className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
                />
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.learningStartDate?.message}
                </p>
              </div>

              <div>
                <label htmlFor='startTime'>開始時間</label>
                <div className='flex gap-2'>
                  <input
                    id='startTime'
                    type='time'
                    {...register('startTime')}
                    className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
                  />
                </div>
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.startTime?.message}
                </p>
              </div>
              <div>
                <label htmlFor='learningEndDate '>学習終了日</label>
                <input
                  id='learningEndDate'
                  type='date'
                  {...register('learningEndDate')}
                  className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
                />
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.learningEndDate?.message}
                </p>
              </div>

              <div>
                <label htmlFor='endTime'>終了時間</label>
                <div className='flex gap-2'>
                  <input
                    id='endTime'
                    type='time'
                    {...register('endTime')}
                    className='h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl'
                  />
                </div>
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.endTime?.message}
                </p>
              </div>

              <div>
                <label
                  className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700'
                  htmlFor='content'
                >
                  学習メモ
                </label>
                <textarea
                  {...register('content')}
                  id='content'
                  className='flex w-full border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl min-h-[120px] placeholder:text-gray-400'
                  placeholder='今日学んだことや感想を記録しましょう 例：新しい漢字を10個覚えました。読み方が難しかったですが、繰り返し練習して覚えることができました。'
                ></textarea>
                <p className='text-red-500 pt-1 pl-4 text-sm'>
                  {errors.content?.message}
                </p>
              </div>
            </div>
          </div>
          {
            <div className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-clock w-6 h-6 text-emerald-600'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <polyline points='12 6 12 12 16 14'></polyline>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>今日の学習時間</p>
                  <p className='text-2xl font-bold text-gray-800'>
                    {formatLearningTime(learningTime)}
                  </p>
                </div>
              </div>
            </div>
          }
          <div className='space-y-3'>
            <button
              type='submit'
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-save w-5 h-5 mr-2'
              >
                <path d='M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'></path>
                <path d='M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7'></path>
                <path d='M7 3v4a1 1 0 0 0 1 1h7'></path>
              </svg>
              {isSubmitting ? '記録を保存中...' : '記録を保存'}
            </button>
            <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 w-full border-green-200 text-green-700 hover:bg-green-50 py-6 rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-sparkles w-5 h-5 mr-2'
              >
                <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'></path>
                <path d='M20 3v4'></path>
                <path d='M22 5h-4'></path>
                <path d='M4 17v2'></path>
                <path d='M5 18H3'></path>
              </svg>
              AI投稿文を生成
            </button>
          </div>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200'>
            <section className='p-4'>
              <h3 className='text-sm font-medium text-teal-800 mb-2'>
                💡 学習記録のコツ
              </h3>
              <ul className='text-sm text-teal-700 space-y-1'>
                <li>• 具体的な学習内容を記録すると振り返りに役立ちます</li>
                <li>• 感想や気づきも一緒に記録しましょう</li>
                <li>• 毎日少しずつでも継続することが大切です</li>
                <li>• 困ったことや疑問も記録しておくと後で調べられます</li>
              </ul>
            </section>
          </div>
        </form>
      </div>
    </div>
  )
}
