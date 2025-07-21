import { Award, Bookmark, Edit, MessageCircle } from 'lucide-react'

import type { MenuItem } from '../_types/mypageTypes'

export const mypageMenuItems: MenuItem[] = [
  {
    label: 'プロフィール編集',
    icon: Edit,
    href: '/mypage/profile',
  },
  {
    label: 'メッセージ',
    icon: MessageCircle,
    href: '/mypage/messages',
  },
  {
    label: 'ブックマーク',
    icon: Bookmark,
    href: '/mypage/bookmarks',
  },
  {
    label: '実績',
    icon: Award,
    href: '/mypage/achievements',
  },
]
