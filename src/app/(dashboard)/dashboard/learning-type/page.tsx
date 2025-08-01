'use client'
import React from 'react'

import { Button } from '@/app/_components/ui/button'
import { Progress } from '@/app/_components/ui/progress'

const page = () => {
  
  return (
    <div>
      <Progress
        // value={(todayStudyTime / weeklyGoal) * 100}
        className='h-3 bg-green-100'
      />

      {/*onClick={}  */}
      <Button variant='ghost' size='icon' className='mr-4'>
        test
      </Button>
    </div>
  )
}

export default page
