'use client'

import { Header } from './Header'
import { PostList } from './PostList'
import { StudySummaryCard } from './StudySummaryCard'
import { TipsCard } from './TipsCard'
import { ToneSelector } from './ToneSelector'
import { useCopyToClipboard } from '../_hooks/useCopyToClipboard'
import { usePostGenerator } from '../_hooks/usePostGenerator'

export const SnsPostGenerator = () => {
  const { selectedTone, setSelectedTone, posts } = usePostGenerator()
  const { copiedIndex, copyToClipboard } = useCopyToClipboard()

  return (
    <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
      <Header />
      <StudySummaryCard />
      <ToneSelector selectedTone={selectedTone} onToneChange={setSelectedTone} />
      <PostList
        posts={posts}
        selectedTone={selectedTone}
        copiedIndex={copiedIndex}
        onCopy={copyToClipboard}
      />
      <TipsCard />
    </div>
  )
}
