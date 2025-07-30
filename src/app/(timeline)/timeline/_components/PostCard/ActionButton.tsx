import React from 'react'

import { Button } from '@/app/_components/ui/button'

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  activeColor?: string
  hoverColor?: string
  onClick?: () => void
}

export const ActionButton = ({
  icon,
  label,
  active = false,
  activeColor = '',
  hoverColor = '',
  onClick,
}: ActionButtonProps) => (
  <Button
    type='button'
    variant='ghost'
    size='sm'
    onClick={onClick}
    className={`text-xs text-gray-500 ${active ? activeColor : ''} ${!active && hoverColor}`}
  >
    {icon}
    {label}
  </Button>
)
