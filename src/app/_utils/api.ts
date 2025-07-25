// const getTokenFromCookie = () => {
//   const cookies = document.cookie.split('; ')
//   const token = cookies.find(row => row.startsWith('access_token='))
//   return token?.split('=')[1] || ''
// }
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const api = {
  get: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      })
      if (res.status !== 200) {
        const errorData = await res.json()
        console.error('Error fetching data:', errorData)
      }
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      console.error(e)

      throw e
    }
  },

  post: async <ResponseType, RequestType>(
    endpoint: string,
    payload: RequestType
  ) => {
    try {
      // const res = await fetch(endpoint, {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${getTokenFromCookie()}`,
        },
        body: JSON.stringify(payload),
      })
      const responseData = await res.json()
      if (!res.ok) {
        const errorMessage = responseData.message || '登録に失敗しました。'
        throw new Error(errorMessage)
      }
      return responseData as ResponseType
    } catch (e) {
      console.error(e)
      throw e
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
          // Authorization: `Bearer ${getTokenFromCookie()}`,
        },
        body: JSON.stringify(payload),
      })
      if (res.status !== 200) throw new Error('更新に失敗しました。')
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      console.error(e)

      throw e
    }
  },

  del: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      })
      if (res.status !== 200) throw new Error('削除に失敗しました。')
      const data: ResponseType = await res.json()
      return data
    } catch (e) {
      console.error(e)

      throw e
    }
  },
}
