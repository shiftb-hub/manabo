import { useState } from 'react'

export const useCopyToClipboard = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy text: ', err)
    }
  }

  return { copiedIndex, copyToClipboard }
}

