'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { baseAuthSchema } from '@/app/_lib/validation/authSchemas'

export const signupSchema = baseAuthSchema
  .extend({
    nickname: z.string().min(1, 'ニックネームは必須です'),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((v) => v === true, {
      message: '利用規約への同意が必要です',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  })

export type SignupFormValues = z.infer<typeof signupSchema>

export function useSignupForm(onNavigateToEmailVerification: (email: string) => void) {
  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    checks: {
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false,
    },
    level: '弱い',
    color: 'red',
  })

  const evaluatePassword = (password: string) => {
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }
    const score = Object.values(checks).filter(Boolean).length
    const level = ['弱い', '普通', '強い'][Math.min(score - 1, 2)] || '弱い'
    const color = ['red', 'orange', 'green'][Math.min(score - 1, 2)] || 'red'

    setPasswordStrength({ score, checks, level, color })
    setIsPasswordValid(score >= 4)
  }

  // ✅ パフォーマンス改善された watch
  useEffect(() => {
    const subscription = methods.watch((value, { name }) => {
      if (name === 'password' && value.password) {
        evaluatePassword(value.password)
      }
    })
    return () => subscription.unsubscribe()
  }, [methods])

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          nickname: data.nickname,
        }),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(text)
      }

      onNavigateToEmailVerification(data.email)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('予期せぬエラーが発生しました')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    methods,
    onSubmit,
    passwordStrength,
    isPasswordValid,
    isLoading,
    error,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  }
}
