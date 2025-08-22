import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import './globals.css'
import { ToastContainer } from 'react-toastify'

import { getCurrentUser } from '@/app/_utils/user/getCurrentUser'
import { UserProvider } from '@/app/_utils/user/UserProvider'

import BottomNavigation from './_components/bottom-navigation'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'manabo｜学びの継続を応援するモチベーションアプリ',
  description:
    'manaboは、学習の記録・可視化・共有を通じて、あなたのモチベーション維持と成長をサポートします。',
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const user = await getCurrentUser()

  return (
    <html lang='ja'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserProvider initialUser={user}>
          {children}
          <ToastContainer closeOnClick />
          <BottomNavigation />
        </UserProvider>
      </body>
    </html>
  )
}
