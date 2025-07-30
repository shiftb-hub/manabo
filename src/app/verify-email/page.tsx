'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/app/_components/ui/button'

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4fbf7] p-6">
      <motion.div
        className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-green-100 p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center text-gray-800 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 8 }}
          >
            <CheckCircle2 className="text-green-500 w-16 h-16" />
          </motion.div>

          <h1 className="text-2xl font-bold">
            アカウントの準備が整いました 🎉
          </h1>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-black bg-gray-100 px-2 py-1 rounded">
              {email ?? 'ご登録のメールアドレス'}
            </span>{' '}
            宛に、確認メールをお送りしました。
          </p>

          <p className="text-gray-700 leading-relaxed">
            メール内のリンクをクリックすると、アカウントが有効化されます。
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            メールが届かない場合は、迷惑メールフォルダやプロモーションタブをご確認ください。
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            アカウントが有効化されましたら、このページは閉じていただいて大丈夫です。
            <br />
            またのご利用を心よりお待ちしております。
          </p>

          <Button
            onClick={() => alert('この画面は閉じていただいて大丈夫です')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-xl"
          >
            はい、確認しました
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
