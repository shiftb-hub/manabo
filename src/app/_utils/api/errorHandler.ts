import { NextResponse } from 'next/server'

// API共通エラーハンドリング
export const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
  return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
}
