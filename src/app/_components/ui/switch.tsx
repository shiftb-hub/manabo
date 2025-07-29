'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '@/app/_lib/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      // スイッチ背景
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50',
      // 明示的に表示を固定
      'data-[state=checked]:bg-[#10b981]', // ✅ アクティブ時：green-500
      'data-[state=unchecked]:bg-[#e5e7eb]', // ✅ 非アクティブ時：gray-200相当
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // トグル玉
        'pointer-events-none block h-5 w-5 rounded-full transition-transform shadow-md',
        'bg-white', // ✅ 常に白
        'data-[state=checked]:translate-x-5',
        'data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
