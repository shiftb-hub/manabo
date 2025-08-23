import { useState } from 'react'

import { BASE_POSTS } from '../_constants'
import type { Tone } from '../_types'

export const usePostGenerator = () => {
  const [selectedTone, setSelectedTone] = useState<Tone>('カジュアル')

  const generatePosts = (tone: Tone) => {
    return BASE_POSTS[tone] || BASE_POSTS['カジュアル']
  }

  const posts = generatePosts(selectedTone)

  return {
    selectedTone,
    setSelectedTone,
    posts,
  }
}
