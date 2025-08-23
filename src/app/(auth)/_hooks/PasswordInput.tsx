'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'

interface PasswordInputProps {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

export const PasswordInput = ({
  id,
  value,
  onChange,
  placeholder = 'パスワードを入力',
  className = '',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative'>
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pr-10 ${className}`}
        required
      />
      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-transparent'
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className='w-4 h-4 text-gray-400' />
        ) : (
          <Eye className='w-4 h-4 text-gray-400' />
        )}
      </Button>
    </div>
  )
}
