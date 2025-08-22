'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Alert, AlertDescription } from '@/app/_components/ui/alert'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { ManaboIcon } from '@/app/_components/ui/ManaboIcon'
import { useNavigation } from '@/app/_hooks/useNavigation'

const schema = z.object({
  email: z
    .string()
    .nonempty({ error: 'メールアドレスは必須です' })
    .refine((val: string) => val.includes('@'), {
      error: '有効なメールアドレスを入力してください',
    }),
  password: z
    .string()
    .nonempty({ error: 'パスワードは必須です' })
    .min(8, { error: 'パスワードは8文字以上で入力してください' }),
})

type loginForm = z.infer<typeof schema>

export default function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(schema),
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const router = useRouter()
  const hasDisplayError = errors.email || errors.password || loginError
  const { onNavigateToPasswordReset, onNavigateToSignup, onBack } = useNavigation()

  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    setIsLoading(true)
    setLoginError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(error)
      }

      router.push('/dashboard')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLoginError(err.message)
      } else {
        setLoginError('ログインに失敗しました')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Header */}
        <div className='flex items-center mb-8'>
          <Button variant='ghost' size='icon' onClick={onBack} className='mr-4 hover:bg-green-100'>
            <ArrowLeft className='w-5 h-5 text-green-600' />
          </Button>
          <div className='flex items-center'>
            <ManaboIcon size='sm' className='mr-3' />
            <h1 className='text-2xl font-bold text-gray-800'>ログイン</h1>
          </div>
        </div>

        <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-xl'>
          <CardHeader>
            <CardTitle className='text-center text-gray-800'>アカウントにログイン</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              {hasDisplayError && (
                <Alert className='border-red-200 bg-red-50'>
                  <AlertDescription className='text-red-700'>
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    {errors.password?.message && <p>{errors.password.message}</p>}
                    {loginError && <p>{loginError}</p>}
                  </AlertDescription>
                </Alert>
              )}

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-gray-700'>
                  メールアドレス
                </Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='example@email.com'
                    {...register('email')}
                    className='pl-10 border-green-200 focus:border-green-400 rounded-xl'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password' className='text-gray-700'>
                  パスワード
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='パスワードを入力'
                    {...register('password')}
                    className='pl-10 pr-10 border-green-200 focus:border-green-400 rounded-xl'
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-transparent'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className='w-4 h-4 text-gray-400' />
                    ) : (
                      <Eye className='w-4 h-4 text-gray-400' />
                    )}
                  </Button>
                </div>
              </div>

              <div className='flex justify-end'>
                <Button
                  type='button'
                  variant='link'
                  onClick={onNavigateToPasswordReset}
                  className='text-green-600 hover:text-green-700 p-0 h-auto'
                >
                  パスワードを忘れた方
                </Button>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg'
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
              </Button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                アカウントをお持ちでない方は{' '}
                <Button
                  variant='link'
                  onClick={onNavigateToSignup}
                  className='text-green-600 hover:text-green-700 p-0 h-auto font-semibold'
                >
                  新規登録
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
