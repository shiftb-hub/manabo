import { render, screen } from '@testing-library/react'

import { StreakMessage } from '../_components/StreakMessage'

describe('StreakMessage', () => {
  // 1. ローディング状態
  describe('ローディング状態', () => {
    it('Loading中を...表示', () => {
      render(<StreakMessage streakCount={25} isLoading={true} />)
      expect(screen.getByText('...')).toBeInTheDocument()
    })
    it('ローディング中は日数に関係なく読み込み中メッセージを表示', () => {
      render(<StreakMessage streakCount={1000} isLoading={true} />)
      expect(screen.getByText('...')).toBeInTheDocument()
    })
  })
  // 2. マイルストーン優先（特に境界値での優先性）
  describe('マイルストーン優先性', () => {
    it('1日目はマイルストーンメッセージを表示', () => {
      render(<StreakMessage streakCount={1} isLoading={false} />)
      expect(screen.getByText('初日達成！今日から新しい習慣の始まりですね✨')).toBeInTheDocument()
    })
    it('100日目はマイルストーンメッセージを表示', () => {
      render(<StreakMessage streakCount={100} isLoading={false} />)
      expect(screen.getByText('100日達成！三桁クラブ入りおめでとう🎖️')).toBeInTheDocument()
    })
    it('1000日目はマイルストーンメッセージを表示', () => {
      render(<StreakMessage streakCount={1000} isLoading={false} />)
      expect(screen.getByText('1000日達成！伝説級の継続力です🔥')).toBeInTheDocument()
    })
  })
  // 3. レンジの下限・上限の境界
  describe('範囲メッセージの境界値', () => {
    it('22日目は21日目以上の範囲メッセージを表示する（境界値+1）', () => {
      render(<StreakMessage streakCount={22} isLoading={false} />)
      expect(screen.getByText('22日連続！習慣化できていますね👏')).toBeInTheDocument()
    })
    it('99日目は50日以上の範囲メッセージを表示する', () => {
      render(<StreakMessage streakCount={99} isLoading={false} />)
      expect(screen.getByText('99日連続！順調に継続中です💪')).toBeInTheDocument()
    })
    it('101日目は100日以上の範囲メッセージを表示する（境界値+1）', () => {
      render(<StreakMessage streakCount={101} isLoading={false} />)
      expect(screen.getByText('101日連続！三桁継続中です🔥')).toBeInTheDocument()
    })

  })
  // 4. フォールバック（0・負値）
  describe('フォールバック（0・負値）', () => {
    it('0日目の時', () => {
      render(<StreakMessage streakCount={0} isLoading={false} />)
      expect(screen.getByText('これからがんばっていきましょう💪')).toBeInTheDocument()
    })
    it('－５日目の時', () => {
      render(<StreakMessage streakCount={-5} isLoading={false} />)
      expect(screen.getByText('これからがんばっていきましょう💪')).toBeInTheDocument()
    })
  })
  // 5. 最大マイルストーンとそれ以上の値
  describe('最大マイルストーン以上の値', () => {
    it('1001日目は1000日以上の範囲メッセージを表示', () => {
      render(<StreakMessage streakCount={1001} isLoading={false} />)
      expect(screen.getByText('1001日達成！伝説級の継続力です🔥')).toBeInTheDocument()
    })
    it('10000日目も正常に動作する', () => {
      render(<StreakMessage streakCount={10000} isLoading={false} />)
      expect(screen.getByText('10000日達成！伝説級の継続力です🔥')).toBeInTheDocument()
    })
  })
  // 6. 典型的な使用例
  describe('典型的な使用例', () => {
    it('3日目は3日坊主メッセージを表示', () => {
      render(<StreakMessage streakCount={3} isLoading={false} />)
      expect(screen.getByText('3日坊主…？いえ、あなたは違いますね😉')).toBeInTheDocument()
    })
    it('25日目は範囲メッセージを表示する', () => {
      render(<StreakMessage streakCount={25} isLoading={false} />)
      expect(screen.getByText('25日連続！習慣化できていますね👏')).toBeInTheDocument()
    })
    it('99日目は範囲メッセージを表示する', () => {
      render(<StreakMessage streakCount={99} isLoading={false} />)
      expect(screen.getByText('99日連続！順調に継続中です💪')).toBeInTheDocument()
    })
    it('101日目は範囲メッセージを表示する', () => {
      render(<StreakMessage streakCount={101} isLoading={false} />)
      expect(screen.getByText('101日連続！三桁継続中です🔥')).toBeInTheDocument()
    })
  })
})
