export type AppUser = {
  id: number
  nickName: string
  avatarUrl?: string | null
  roleId?: number
}


type Session = AppUser | null

export type UserContextValue = {
  user: Session
  loading: boolean
  error: string | null
  refresh: () => void
}
