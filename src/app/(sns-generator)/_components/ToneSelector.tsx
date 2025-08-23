import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/app/_components/ui/tabs'

import { TONES } from '../_constants'
import type { Tone } from '../_types'

interface ToneSelectorProps {
  selectedTone: Tone
  onToneChange: (tone: Tone) => void
}

export const ToneSelector = ({ selectedTone, onToneChange }: ToneSelectorProps) => {
  return (
    <Card className='mb-6 bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-lg text-gray-800'>投稿のトーンを選択</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={selectedTone}
          onValueChange={(value) => onToneChange(value as Tone)}
          className='w-full'
        >
          <TabsList className='grid w-full grid-cols-3 bg-green-50 rounded-md'>
            {TONES.map((tone) => (
              <TabsTrigger
                key={tone}
                value={tone}
                className='data-[state=active]:text-black data-[state=active]:bg-white text-sm text-gray-600 font-medium rounded-xl'
              >
                {tone}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )
}
