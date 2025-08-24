import { render, screen } from '@testing-library/react'

import { StreakMessage } from '../_components/StreakMessage'

describe('StreakMessage', () => {
  it('3日目は3日坊主メッセージを表示', () => {
    render(<StreakMessage streakCount={3} isLoading={false} />)
    expect(screen.getByText('3日坊主…？いえ、あなたは違いますね😉')).toBeInTheDocument()
  })

  it('ローディング中は読み込み中を表示する', () => {
    render(<StreakMessage streakCount={25} isLoading={true} />)
    expect(screen.getByText('...')).toBeInTheDocument()
  })

  it('25日目は範囲メッセージを表示する', () => {
    render(<StreakMessage streakCount={25} isLoading={false} />)
    expect(screen.getByText('25日連続！習慣化できていますね👏')).toBeInTheDocument()
  })
})