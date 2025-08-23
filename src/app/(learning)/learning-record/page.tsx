// import React from 'react'
// import { redirect } from 'next/navigation'

import { prisma } from '@/app/_lib/prisma'
// import { createClient } from '@/app/_utils/supabase/server'

import { LearningRecordForm } from './_components/LearningRecordForm'

type Category = {
  id: number
  categoryName: string
  parentId: number | null
}

const Page = async () => {
  // サインインしているか確認
  // const supabase = await createClient()
  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  // カテゴリを取得
  const categories: Category[] = await prisma.category.findMany({
    orderBy: {
      id: 'asc',
    },
  })
  return <LearningRecordForm categories={categories} />
}
export default Page
