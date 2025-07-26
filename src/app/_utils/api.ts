export const api = {
  get: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.status !== 200) {
        const errorData = await res.json()
        throw new Error('Error fetching data:', errorData)
      }
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      throw new Error(e instanceof Error ? e.message : String(e))
    }
  },

  post: async <ResponseType, RequestType>(
    endpoint: string,
    payload: RequestType
  ) => {
    try {
      // デバック用
      console.log('🚀 POST リクエスト開始')
      console.log('📍 エンドポイント:', endpoint)
      console.log('📦 送信データ:', JSON.stringify(payload, null, 2))
      console.log('⏰ 送信時刻:', new Date().toISOString())
      // ここまで

      const res = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // デバック用
      console.log('📡 レスポンス受信')
      console.log('🔢 ステータスコード:', res.status)
      console.log('📝 ステータステキスト:', res.statusText)
      console.log('✅ 成功フラグ:', res.ok)
      console.log(
        '📋 レスポンスヘッダー:',
        Object.fromEntries(res.headers.entries())
      )
      // ここまで

      const responseData = await res.json()
      if (!res.ok) {
        // デバック用
        console.error('❌ POST エラー詳細:')
        console.error('🔴 ステータスコード:', res.status)
        console.error('🔴 エラーレスポンス:', responseData)
        // ここまで

        const errorMessage = responseData.message || '登録に失敗しました。'
        throw new Error(errorMessage)
      }
      return responseData as ResponseType
    } catch (e) {
      // デバック用
      console.error('💥 POST例外エラー:', e)
      console.error('🏷️ エラータイプ:', e?.constructor.name)
      console.error(
        '💬 エラーメッセージ:',
        e instanceof Error ? e.message : String(e)
      )
      // ここまで
      throw new Error(e instanceof Error ? e.message : String(e))
    }
  },

  put: async <RequestType, ResponseType>(
    endpoint: string,
    payload: RequestType
  ) => {
    try {
      const res = await fetch(endpoint, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (res.status !== 200) throw new Error('更新に失敗しました。')
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      throw new Error(e instanceof Error ? e.message : String(e))
    }
  },

  del: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.status !== 200) throw new Error('削除に失敗しました。')
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      throw new Error(e instanceof Error ? e.message : String(e))
    }
  },
}
