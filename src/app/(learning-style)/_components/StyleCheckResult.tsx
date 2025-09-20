'use client'
import { ArrowLeft, BookOpen, Star, Users } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { ManaboIcon } from '@/app/_components/ui/ManaboIcon'
import { useNavigation } from '@/app/_hooks/useNavigation'

import { CompatibleUser } from '../_types/compatibleUser'
import { LearningStyleLists } from '../_types/learningStyleLists'

interface StyleCheckResultProps {
  result: LearningStyleLists | null
  compatibleUsers: CompatibleUser[] | []
  resetResult: () => void
}

export const StyleCheckResult = ({
  result,
  resetResult,
  compatibleUsers,
}: StyleCheckResultProps) => {
  const { onBack } = useNavigation()

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
      <div className='max-w-md mx-auto px-4 py-6 pb-24'>
        <div className='flex items-center justify-between mb-6'>
          <Button
            type='button'
            variant='ghost'
            size='sm'
            onClick={onBack}
            className='text-green-600 hover:bg-green-50'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            戻る
          </Button>
          <h1 className='text-lg font-bold text-green-800'>診断結果</h1>
          <div className='w-16' />
        </div>

        <Card className='bg-white/80 backdrop-blur-sm border-green-200 mb-6'>
          {result ? (
            <>
              <CardHeader className='text-center pb-4'>
                <div className='text-6xl mb-4'>{result.icon}</div>
                <CardTitle className='text-xl text-green-800'>{result.name}</CardTitle>
                <p className='text-green-600 text-sm'>{result.description}</p>
              </CardHeader>
              <CardContent className='space-y-6'>
                {/* 特徴 */}
                <div>
                  <h3 className='font-semibold text-green-800 mb-3 flex items-center'>
                    <Star className='w-4 h-4 mr-2' />
                    あなたの学習特徴
                  </h3>
                  <div className='space-y-2'>
                    {result.characteristics.map((char, index) => (
                      <div key={index} className='flex items-center text-sm text-gray-700'>
                        <div className='w-2 h-2 bg-green-400 rounded-full mr-3' />
                        {char}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='font-semibold text-green-800 mb-3 flex items-center'>
                    <BookOpen className='w-4 h-4 mr-2' />
                    おすすめの学習法
                  </h3>
                  <div className='space-y-2'>
                    {result.recommendations.map((rec, index) => (
                      <div key={index} className='flex items-center text-sm text-gray-700'>
                        <div className='w-2 h-2 bg-emerald-400 rounded-full mr-3' />
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='font-semibold text-green-800 mb-3 flex items-center'>
                    <Users className='w-4 h-4 mr-2' />
                    相性の良い学習仲間
                  </h3>
                  <div className='space-y-3'>
                    {compatibleUsers.length === 0 ? (
                      <p className='text-gray-500 text-sm'>
                        相性がマッチするユーザーが見つかりませんでした。
                      </p>
                    ) : (
                      compatibleUsers.map((user) => (
                        <div
                          key={user.id}
                          className='flex items-center justify-between p-3 bg-green-50 rounded-lg'
                        >
                          <div className='flex items-center'>
                            <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-5'>
                              <span className='text-green-600 text-sm font-semibold'>
                                {user.profile && user.profile.profilePicture ? (
                                  <Image
                                    src={user.profile.profilePicture}
                                    alt='Profile'
                                    className='w-8 h-8 rounded-full'
                                  />
                                ) : (
                                  <ManaboIcon size='sm' />
                                )}
                              </span>
                            </div>
                            <div>
                              <p className='font-medium text-gray-800'>{user.nickName}</p>
                              <p className='text-xs text-gray-600'>
                                {user.userLearningStyle.learningStyle.name}
                              </p>
                            </div>
                          </div>
                          <Button
                            type='button'
                            size='sm'
                            variant='outline'
                            className='text-green-600 border-green-200'
                          >
                            フォロー
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </CardContent>

              {/* アクションボタン */}
              <div className='space-y-3'>
                <Button
                  type='button'
                  className='w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                >
                  <Users className='w-4 h-4 mr-2' />
                  仲間を探す
                </Button>
                <Button
                  type='button'
                  onClick={resetResult}
                  variant='outline'
                  className='w-full text-green-600 border-green-200 hover:bg-green-50'
                >
                  もう一度診断する
                </Button>
              </div>
            </>
          ) : (
            <CardHeader className='text-center pb-4'>
              <div className='flex items-center justify-center mb-3'>
                <CardTitle className='text-lg text-red-600'>診断エラー</CardTitle>
              </div>
              <p className='text-gray-700 text-sm'>
                回答がうまく反映されませんでした。
                <br />
                もう一度診断をお試しください。
              </p>
            </CardHeader>
          )}
        </Card>
      </div>
    </div>
  )
}
