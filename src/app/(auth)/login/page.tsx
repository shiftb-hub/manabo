"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { Input } from "@/app/_components/ui/Input"
import { Label } from "@/app/_components/ui/Label"
import { Alert, AlertDescription } from "@/app/_components/ui/Alert"
// import { Eye, EyeOff, ArrowLeft, Mail, Lock } from "lucide-react"
// import { ManaboIcon } from "@/app/_components/ui/ManaboIcon"
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void
  onNavigateToSignup: () => void
  onNavigateToPasswordReset: () => void
  onBack: () => void
}

interface loginForm {
  email: string
  password: string
}

export default function LoginScreen({
  onLogin,
  onNavigateToSignup,
  onNavigateToPasswordReset,
  onBack,
}: LoginScreenProps) {
  // const [form, setForm] = useState({ email: "", password: "" })
  const { 
    register, 
    handleSubmit,
    formState: { errors },
   } = useForm<loginForm>();

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit: SubmitHandler<loginForm> = (data) => {
    console.log(data);
  }
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   setError("")

  //   try {
  //     // バリデーション
  //     if (!form.email || !form.password) {
  //       throw new Error("メールアドレスとパスワードを入力してください")
  //     }

  //     // ログイン処理をシミュレート
  //     await new Promise((resolve) => setTimeout(resolve, 1000))
  //     onLogin(form.email, form.password)
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "ログインに失敗しました")
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-4 hover:bg-green-100">
            {/* <ArrowLeft className="w-5 h-5 text-green-600" /> */}
          </Button>
          <div className="flex items-center">
            {/* <ManaboIcon size="sm" className="mr-3" /> */}
            <h1 className="text-2xl font-bold text-gray-800">ログイン</h1>
          </div>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-green-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-gray-800">アカウントにログイン</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  メールアドレス
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    {...register("email", { required: "メールアドレスは必須です"})}
                    className="pl-10 border-green-200 focus:border-green-400 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  パスワード
                </Label>
                <div className="relative">
                  {/* <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワードを入力"
                    {...register("password", { required: "パスワードは必須です"})}
                    className="pl-10 pr-10 border-green-200 focus:border-green-400 rounded-xl"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* パスワード表示・非表示の目のアイコンを配置 */}
                    {/* {showPassword ? (
                      // <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      // <Eye className="w-4 h-4 text-gray-400" />
                    )} */}
                    {/* パスワード表示・非表示の目のアイコンを配置 */}
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="link"
                  onClick={onNavigateToPasswordReset}
                  className="text-green-600 hover:text-green-700 p-0 h-auto"
                >
                  パスワードを忘れた方
                </Button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg"
              >
                {isLoading ? "ログイン中..." : "ログイン"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                アカウントをお持ちでない方は{" "}
                <Button
                  variant="link"
                  onClick={onNavigateToSignup}
                  className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold"
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
