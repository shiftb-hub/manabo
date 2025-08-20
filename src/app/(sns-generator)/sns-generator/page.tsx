import { SnsPostGenerator } from '../_components/SnsPostGenerator'
import type { SnsPostGeneratorProps } from '../_types'

export default function Page({ onNavigate }: SnsPostGeneratorProps) {
  return <SnsPostGenerator onNavigate={onNavigate} />
}
