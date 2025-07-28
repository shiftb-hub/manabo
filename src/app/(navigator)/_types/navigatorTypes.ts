import { LucideIcon } from 'lucide-react'

export interface NavigatorItem {
  id: string
  title: string
  description: string
  category: string
  icon: LucideIcon
  color: string
  features: string[]
  href: string
}

export interface Category {
  id: string
  label: string
  icon: LucideIcon
}

export interface NavigatorData {
  screens: NavigatorItem[]
  categories: Category[]
}
