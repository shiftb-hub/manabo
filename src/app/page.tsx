'use client'

import { CTA } from '@/app/_components/home/CTA'
import { FeatureCards } from '@/app/_components/home/FeatureCards'
import { GradientDefs } from '@/app/_components/home/GradientDefs'
import { Header } from '@/app/_components/home/Header'
import { Hero } from '@/app/_components/home/Hero'
import { Highlights } from '@/app/_components/home/Highlights'
import { Testimonials } from '@/app/_components/home/Testimonials'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='px-4 py-8 space-y-12'>
        <Hero />
        <FeatureCards />
        <Testimonials />
        <Highlights />
        <CTA />
      </main>
      <GradientDefs />
    </div>
  )
}
