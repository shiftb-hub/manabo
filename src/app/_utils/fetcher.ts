import { api } from './api'

export const fetcher = async<T>(url: string): Promise<T> => {
  return api.get<T>(url)
}