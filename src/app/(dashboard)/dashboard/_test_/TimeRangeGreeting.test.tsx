import  { getGreetingByHour,  } from '../_components/TimeRangeGreeting'

//時間をモックに置き換え
jest.mock('../_components/TimeRangeGreeting.tsx', () => {
  const originalModule = jest.requireActual('../_components/TimeRangeGreeting.tsx')
  return {
    __esModule: true,
    ...originalModule,
    getJapanHour: jest.fn(),
  }
})

  describe('getGreetingByHour', () => {
    it('各時間帯で正しい挨拶を返す', () => {
      expect(getGreetingByHour(3)).toBe('おはよう')
      expect(getGreetingByHour(10)).toBe('おはよう')
      expect(getGreetingByHour(11)).toBe('こんにちは')
      expect(getGreetingByHour(13)).toBe('こんにちは')
      expect(getGreetingByHour(14)).toBe('お疲れさま')
      expect(getGreetingByHour(17)).toBe('お疲れさま')
      expect(getGreetingByHour(18)).toBe('お疲れさまでした')
      expect(getGreetingByHour(21)).toBe('お疲れさまでした')
      expect(getGreetingByHour(22)).toBe('夜更かしですね')
      expect(getGreetingByHour(23)).toBe('夜更かしですね')
      expect(getGreetingByHour(24)).toBe('夜更かしですね')
      expect(getGreetingByHour(0)).toBe('夜更かしですね')
      expect(getGreetingByHour(2)).toBe('夜更かしですね')
    })
  })