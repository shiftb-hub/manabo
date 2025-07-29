import type { ComponentType } from 'react'

export type MenuItem = {
  label: string
  icon: ComponentType<{ className?: string }>
  href: string
}
