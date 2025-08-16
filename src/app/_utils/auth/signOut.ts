import { supabase } from '@/app/_lib/supabaseClient'

export const signOut = async (): Promise<string | null> => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw new Error(error.message)
    }

    return null
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '予期しないエラーです'
    return errorMessage
  }
}
