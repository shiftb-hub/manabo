type ManaboIconProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showBadge?: boolean
  className?: string
}

export function ManaboIcon({ size = 'md', showBadge = true, className = '' }: ManaboIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg`}
      >
        <span className="text-white font-bold text-xl">M</span>
      </div>
      {showBadge && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-xs">✨</span>
        </div>
      )}
    </div>
  )
}

export default ManaboIcon
