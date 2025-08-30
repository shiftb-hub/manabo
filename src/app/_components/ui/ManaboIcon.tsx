import Image from 'next/image'
import React from 'react'

interface ManaboIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}
export function ManaboIcon({ size = 'sm', className = '' }: ManaboIconProps) {
  const sizeClasses = {
    sm: 32,
    md: 40,
    lg: 100,
    xl: 150,
  }
  const imageSize = sizeClasses[size]
  return (
    <div className={`relative ${className}`}>
      <Image
        src='/logo.png' // publicフォルダ内の画像ならこの書き方
        alt='ロゴ炎のみ'
        width={imageSize}
        height={imageSize}
      />
    </div>
  )
}

export default ManaboIcon
