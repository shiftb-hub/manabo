'use client'

// cspell:ignore TOEIC

import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Search,
  UserPlus,
} from 'lucide-react'
import { useState } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar'
import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'

export default function Timeline() {
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([])

  const timelinePosts = [
    {
      id: 1,
      user: {
        name: '山田 花子',
        avatar: 'YH',
        studyStreak: 8,
        learningStyle: '森グループ',
      },
      category: '英語',
      time: 1.5,
      content:
        'TOEIC対策の単語学習を進めました。今日は新しい単語を50個覚えることができました！継続は力なりですね。',
      timestamp: '2時間前',
      likes: 12,
      comments: 3,
      isFollowing: false,
    },
    {
      id: 2,
      user: {
        name: '佐藤 太郎',
        avatar: 'ST',
        studyStreak: 23,
        learningStyle: '草原グループ',
      },
      category: 'プログラミング',
      time: 3,
      content:
        'React Hooksの学習を深掘りしました。useEffectの依存配列について理解が深まり、実際のプロジェクトで活用できそうです。',
      timestamp: '4時間前',
      likes: 18,
      comments: 7,
      isFollowing: true,
    },
    {
      id: 3,
      user: {
        name: '田中 美咲',
        avatar: 'TM',
        studyStreak: 12,
        learningStyle: '竹林グループ',
      },
      category: '資格勉強',
      time: 2,
      content:
        '簿記2級の勉強を継続中。今日は工業簿記の原価計算について学習しました。難しいですが、少しずつ理解できてきています。',
      timestamp: '6時間前',
      likes: 9,
      comments: 2,
      isFollowing: false,
    },
    {
      id: 4,
      user: {
        name: '鈴木 健太',
        avatar: 'SK',
        studyStreak: 5,
        learningStyle: '森グループ',
      },
      category: 'デザイン',
      time: 2.5,
      content:
        'Figmaを使ったUI/UXデザインの学習。今日はプロトタイプ作成の基本を学びました。実際に手を動かすと理解が深まりますね！',
      timestamp: '8時間前',
      likes: 15,
      comments: 5,
      isFollowing: false,
    },
  ]

  const handleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const filteredPosts = timelinePosts.filter(
    post =>
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='container mx-auto px-4 py-6 max-w-md pb-24'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-xl font-bold text-gray-800'>タイムライン</h1>
        <Button variant='ghost' size='sm' className='text-green-600'>
          <MoreHorizontal className='w-5 h-5' />
        </Button>
      </div>

      {/* Search */}
      <div className='mb-6'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
          <Input
            placeholder='ユーザーや学習内容を検索...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='pl-10 border-green-200 focus:border-green-400 rounded-xl'
          />
        </div>
      </div>

      {/* Timeline Posts */}
      <div className='space-y-4'>
        {filteredPosts.map(post => (
          <Card
            key={post.id}
            className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'
          >
            <CardContent className='p-4'>
              <div className='flex items-start space-x-3'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage
                    src={`/placeholder.svg?height=48&width=48&query=${post.user.avatar}`}
                  />
                  <AvatarFallback className='bg-green-100 text-green-600 font-medium'>
                    {post.user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <div>
                      <p className='font-medium text-gray-800'>
                        {post.user.name}
                      </p>
                      <div className='flex items-center space-x-2'>
                        <p className='text-xs text-gray-500'>
                          {post.timestamp}
                        </p>
                        <Badge
                          variant='outline'
                          className='text-xs border-green-200 text-green-600'
                        >
                          {post.user.learningStyle}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`text-xs ${
                        post.isFollowing ? 'text-gray-500' : 'text-green-600'
                      }`}
                    >
                      <UserPlus className='w-4 h-4 mr-1' />
                      {post.isFollowing ? 'フォロー中' : 'フォロー'}
                    </Button>
                  </div>

                  <div className='mb-3'>
                    <div className='flex items-center space-x-2 mb-2'>
                      <Badge className='bg-green-100 text-green-700 text-xs'>
                        {post.category}
                      </Badge>
                      <Badge
                        variant='outline'
                        className='border-emerald-200 text-emerald-600 text-xs'
                      >
                        {post.time}時間
                      </Badge>
                      <Badge
                        variant='outline'
                        className='border-yellow-200 text-yellow-600 text-xs'
                      >
                        {post.user.studyStreak}日連続
                      </Badge>
                    </div>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                      {post.content}
                    </p>
                  </div>

                  <div className='flex items-center justify-between pt-3 border-t border-gray-100'>
                    <div className='flex items-center space-x-4'>
                      <Button
                        variant='ghost'
                        size='sm'
                        className={`text-xs ${
                          likedPosts.includes(post.id)
                            ? 'text-red-500'
                            : 'text-gray-500 hover:text-red-500'
                        }`}
                        onClick={() => handleLike(post.id)}
                      >
                        <Heart
                          className={`w-4 h-4 mr-1 ${
                            likedPosts.includes(post.id) ? 'fill-current' : ''
                          }`}
                        />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </Button>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='text-xs text-gray-500 hover:text-blue-500'
                      >
                        <MessageCircle className='w-4 h-4 mr-1' />
                        {post.comments}
                      </Button>
                    </div>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`text-xs ${
                        bookmarkedPosts.includes(post.id)
                          ? 'text-yellow-500'
                          : 'text-gray-500 hover:text-yellow-500'
                      }`}
                      onClick={() => handleBookmark(post.id)}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          bookmarkedPosts.includes(post.id)
                            ? 'fill-current'
                            : ''
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <Card className='bg-white/80 backdrop-blur-sm border-green-100 shadow-sm'>
          <CardContent className='p-8 text-center'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Search className='w-8 h-8 text-green-600' />
            </div>
            <p className='text-gray-600 mb-2'>検索結果が見つかりませんでした</p>
            <p className='text-sm text-gray-500'>
              別のキーワードで検索してみてください
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
