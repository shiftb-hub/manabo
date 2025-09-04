'use client'

export const GradientDefs = () => (
  <svg width='0' height='0' style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id='green-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#10b981' />
        <stop offset='100%' stopColor='#059669' />
      </linearGradient>
    </defs>
  </svg>
)
