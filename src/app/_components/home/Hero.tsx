'use client'

import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'

export const Hero = () => (
  <section className='text-center space-y-6'>
    <div className='space-y-4'>
      <h2 className='text-3xl font-bold text-gray-900 text-balance'>
        学習を習慣に変える
        <br />
        <span className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>
          継続サポートアプリ
        </span>
      </h2>
      <p className='text-lg text-gray-600 text-pretty'>
        AIと仲間と一緒に、毎日の学習を楽しく続けよう
      </p>
    </div>

    <div className='w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto relative'>
      <BookOpen className='w-10 h-10 text-white' />
      <div className='absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center'>
        <Sparkles className='w-4 h-4 text-white' />
      </div>
    </div>

    <Button
      asChild
      className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg'
    >
      <Link href='/dashboard'>
        無料で始める
        <ArrowRight className='w-5 h-5 ml-2' aria-hidden />
      </Link>
    </Button>
  </section>
)
