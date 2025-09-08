import { NextResponse } from 'next/server'

// API共通エラーハンドリング
export const handleApiError = (error: unknown) => {
  // 開発環境では詳細なエラーログを出力
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error('[API Error]', error)
  }

  // Zodバリデーションエラー → 400 (Bad Request)
  if (error?.constructor?.name === 'ZodError') {
    return NextResponse.json(
      {
        message: 'Validation error',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        details: (error as any).errors,
      },
      { status: 400 },
    )
  }

  // Errorインスタンスの場合、メッセージから4xxエラーを判定
  if (error instanceof Error) {
    const message = error.message.toLowerCase()

    // Unauthorized → 401
    if (message.includes('unauthorized') || message.includes('authentication')) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }

    // Forbidden → 403
    if (message.includes('forbidden') || message.includes('permission')) {
      return NextResponse.json({ message: error.message }, { status: 403 })
    }

    // Bad Request → 400
    if (
      message.includes('bad request') ||
      message.includes('invalid') ||
      message.includes('validation')
    ) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    // Not Found → 404
    if (message.includes('not found') || message.includes('見つかりません')) {
      return NextResponse.json({ message: error.message }, { status: 404 })
    }

    // Duplicate/Conflict → 409
    if (message.includes('duplicate') || message.includes('already exists')) {
      return NextResponse.json({ message: error.message }, { status: 409 })
    }
  }

  // Prismaの既知のリクエストエラー（特定のエラーコードのみ4xx）
  if (error?.constructor?.name === 'PrismaClientKnownRequestError') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prismaError = error as any

    // P2002: ユニーク制約違反 → 409 (Conflict)
    if (prismaError.code === 'P2002') {
      return NextResponse.json({ message: 'Duplicate entry' }, { status: 409 })
    }

    // P2025: レコードが見つからない → 404 (Not Found)
    if (prismaError.code === 'P2025') {
      return NextResponse.json({ message: 'Record not found' }, { status: 404 })
    }
  }

  // それ以外のすべてのエラーは500として扱う（デフォルト）
  if (error instanceof Error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Unknown error' }, { status: 500 })
}
