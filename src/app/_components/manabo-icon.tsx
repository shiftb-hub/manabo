import Image from 'next/image'

type ManaboIconProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function ManaboIcon({ size = 'lg', className = '' }: ManaboIconProps) {
  const sizeClasses = {
    sm: 50,
    md: 100,
    lg: 150,
    xl: 200,
  }
  const imageSize = sizeClasses[size]
  return (
    <div className={`relative ${className}`}>
      <div className={` flex items-center justify-center `}>
        <Image
          src='/logo02.png' // publicフォルダ内の画像ならこの書き方
          alt='ロゴ炎と文字'
          width={imageSize}
          height={imageSize}
        />
      </div>
    </div>
  )
}

export default ManaboIcon
