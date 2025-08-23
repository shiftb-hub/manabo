'use client'

import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, FormProvider } from 'react-hook-form'

import PasswordInput from '@/app/(auth)/_components/PasswordInput'
import PasswordPolicyIndicator from '@/app/(auth)/_components/PasswordPolicyIndicator'
import { useSignupForm } from '@/app/(auth)/_hooks/useSignupForm'
import { ManaboIcon } from '@/app/_components/manabo-icon'
import { Alert, AlertDescription } from '@/app/_components/ui/alert'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Checkbox } from '@/app/_components/ui/checkbox'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'

import AgreeToTermsLabel from './AgreeToTermsLabel'

interface SignupScreenProps {
  onNavigateToLogin: () => void
  onNavigateToEmailVerification: (email: string) => void
  onBack: () => void
}

export default function SignupScreen({
  onNavigateToLogin,
  onNavigateToEmailVerification,
  onBack,
}: SignupScreenProps) {
  const {
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
  } = useSignupForm(onNavigateToEmailVerification)

  useEffect(() => {}, [methods.formState.isValid])

  return (
    <div className='min-h-screen bg-[#f4fbf7] flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='flex items-center mb-8'>
          <Button variant='ghost' size='icon' onClick={onBack} className='mr-4'>
            <ArrowLeft className='w-5 h-5 text-green-600' />
          </Button>
          <div className='flex items-center'>
            <ManaboIcon size='sm' className='mr-3' />
            <h1 className='text-2xl font-bold text-gray-800'>新規登録</h1>
          </div>
        </div>

        <Card className='bg-white text-black border border-green-100 shadow-xl'>
          <CardHeader>
            <CardTitle className='text-center text-gray-800'>アカウントを作成</CardTitle>
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
                <fieldset disabled={isLoading} className={isLoading ? 'opacity-50' : ''}>
                  {error && (
                    <Alert className='border-red-200 bg-red-50'>
                      <AlertDescription className='text-red-700'>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div>
                    <Label htmlFor='nickname'>ニックネーム</Label>
                    <Input id='nickname' {...methods.register('nickname')} />
                  </div>

                  <div>
                    <Label htmlFor='email'>メールアドレス</Label>
                    <Input id='email' type='email' {...methods.register('email')} />
                  </div>

                  <div>
                    <Label htmlFor='password'>パスワード</Label>
                    <PasswordInput
                      id='password'
                      show={showPassword}
                      setShow={setShowPassword}
                      {...methods.register('password')}
                    />
                    <PasswordPolicyIndicator
                      score={passwordStrength.score}
                      checks={passwordStrength.checks}
                      level={passwordStrength.level}
                      color={passwordStrength.color}
                    />
                  </div>

                  <div>
                    <Label htmlFor='confirmPassword'>パスワード確認</Label>
                    <PasswordInput
                      id='confirmPassword'
                      show={showConfirmPassword}
                      setShow={setShowConfirmPassword}
                      {...methods.register('confirmPassword')}
                    />
                  </div>

                  <div className='flex items-center space-x-2'>
                    <Controller
                      control={methods.control}
                      name='agreeToTerms'
                      render={({ field }) => (
                        <Checkbox
                          id='terms'
                          checked={!!field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <AgreeToTermsLabel />
                  </div>

                  {/* ← この余白を追加 */}
                  <div className='mt-4'>
                    <Button
                      type='submit'
                      disabled={isLoading || !isPasswordValid || !methods.formState.isValid}
                      className='w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-6 rounded-2xl shadow-lg'
                    >
                      {isLoading ? '登録中...' : 'アカウントを作成'}
                    </Button>
                  </div>
                </fieldset>
              </form>
            </FormProvider>

            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                すでにアカウントをお持ちの方は{' '}
                <Button
                  variant='link'
                  onClick={onNavigateToLogin}
                  className='text-green-600 p-0 h-auto font-semibold'
                >
                  ログイン
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
