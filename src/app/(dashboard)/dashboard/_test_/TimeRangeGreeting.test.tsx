import { render, screen } from '@testing-library/react'

import TimeRangeGreeting from '../_components/TimeRangeGreeting'

describe('TimeRangeGreeting 境界値テスト', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const cases = [
    //おはよう
    { hour: '2025-09-12T03:00:00+09:00', expected: 'おはよう' },
    { hour: '2025-09-12T10:00:00+09:00', expected: 'おはよう' },
    //こんにちは
    { hour: '2025-09-12T11:00:00+09:00', expected: 'こんにちは' },
    { hour: '2025-09-12T13:00:00+09:00', expected: 'こんにちは' },
    //お疲れさま
    { hour: '2025-09-12T14:00:00+09:00', expected: 'お疲れさま' },
    { hour: '2025-09-12T17:00:00+09:00', expected: 'お疲れさま' },
    //お疲れさまでした
    { hour: '2025-09-12T18:00:00+09:00', expected: 'お疲れさまでした' },
    { hour: '2025-09-12T21:00:00+09:00', expected: 'お疲れさまでした' },
    //夜更かしですね
    { hour: '2025-09-12T22:00:00+09:00', expected: '夜更かしですね' },
    { hour: '2025-09-12T23:00:00+09:00', expected: '夜更かしですね' },
    { hour: '2025-09-13T00:00:00+09:00', expected: '夜更かしですね' },
    { hour: '2025-09-13T02:00:00+09:00', expected: '夜更かしですね' },
  ]

  it.each(cases)('hourはexpectedを返す', ({ hour, expected }) => {
    jest.setSystemTime(new Date(hour)) //日本時間に設定
    render(<TimeRangeGreeting />)
    expect(screen.getByText(expected)).toBeInTheDocument()
  })
})
