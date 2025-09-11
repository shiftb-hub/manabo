import { render, screen } from '@testing-library/react'

import TimeRangeGreeting from '../_components/TimeRangeGreeting'

describe('TimeRangeGreeting 境界値テスト', () => {
  //おはよう
  it('3時はおはようを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T03:00:00+09:00')) //日本時間に設定
    render(<TimeRangeGreeting />)
    expect(screen.getByText('おはよう')).toBeInTheDocument()
  })
  it('10時はおはようを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T10:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('おはよう')).toBeInTheDocument()
  })
  //こんにちは
  it('11時はこんにちはを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T11:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('こんにちは')).toBeInTheDocument()
  })
  it('13時はこんにちはを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T13:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('こんにちは')).toBeInTheDocument()
  })
  //お疲れさま
    it('14時はお疲れさまを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T14:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('お疲れさま')).toBeInTheDocument()
  })
  it('17時はお疲れさまを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T17:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('お疲れさま')).toBeInTheDocument()
  })
  //お疲れさまでした
  it('18時はお疲れさまでしたを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T18:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('お疲れさまでした')).toBeInTheDocument()
  })      
  it('21時はお疲れさまでしたを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T21:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('お疲れさまでした')).toBeInTheDocument()
  })
  //夜更かしですね
  it('22時は夜更かしですねを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T22:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('夜更かしですね')).toBeInTheDocument()
  })
  it('23時は夜更かしですねを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-12T23:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('夜更かしですね')).toBeInTheDocument()
  })    
  it('0時は夜更かしですねを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-13T00:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('夜更かしですね')).toBeInTheDocument()
  })
  it('2時は夜更かしですねを返す', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-09-13T02:00:00+09:00'))
    render(<TimeRangeGreeting />)
    expect(screen.getByText('夜更かしですね')).toBeInTheDocument()
  } )
})
