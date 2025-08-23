import { z } from 'zod'

export const learningRecordSchema = z
  .object({
    categoryId: z.number().min(1, 'カテゴリを選択してください。'),
    //<select> の value は文字列（string）として送られるため、Zod スキーマを string にして対応
    title: z
      .string()
      .min(1, 'タイトルは入力必須です。')
      .max(40, 'タイトルは40文字以下で入力してください。'),
    content: z
      .string()
      .min(3, '学習メモは入力必須です。')
      .max(40, '学習内容は200文字以下で入力してください。'),
    learningStartDate: z
      .string()
      .min(1, '開始日を入力してください。')
      .regex(/^\d{4}-\d{2}-\d{2}$/, '日付はYYYY-MM-DD形式で入力してください。'),

    learningEndDate: z
      .string()
      .min(1, '終了日を入力してください。')
      .regex(/^\d{4}-\d{2}-\d{2}$/, '日付はYYYY-MM-DD形式で入力してください。'),

    startTime: z
      .string()
      .min(1, '開始時間を入力してください。')
      .regex(
        /^([01]\d|2[0-3]):[0-5]\d$/, // input[type=time]は秒を返さないため、秒部分を削除
        '時刻はHH:mm形式で入力してください。',
      ),

    endTime: z
      .string()
      .min(1, '終了時間を入力してください。')
      .regex(
        /^([01]\d|2[0-3]):[0-5]\d$/, // input[type=time]は秒を返さないため、秒部分を削除
        '時刻はHH:mm形式で入力してください。',
      ),
  })
  .refine(
    ({ learningStartDate, learningEndDate, startTime, endTime }) => {
      const start = new Date(`${learningStartDate}T${startTime}`)
      const end = new Date(`${learningEndDate}T${endTime}`)
      return start <= end
    },
    {
      message: '終了日時は開始日時より後の時間を入力してください',
      path: ['endTime'],
    },
  )

export type LearningRecord = z.infer<typeof learningRecordSchema>

//保存時の型
export const learningRecordDbSchema = z.object({
  categoryId: z.number(),
  title: z.string(),
  content: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  duration: z.number(),
  learningDate: z.coerce.date(),
})
export type LearningRecordDbSchemaType = z.infer<typeof learningRecordDbSchema>
