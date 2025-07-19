import z from "zod";

// フロントやAPIで使う学習記録フォーム用のバリデーション
export const learningRecordSchema = z.object({
  categoryId: z.coerce.number().int().min(1, "入力必須です"),
  title: z.string().min(1, "入力必須です"),
  content: z.string().min(3, "入力必須です"),
learningDate: z.string().min(1, { message: '入力必須です。' }),
startHour: z.string().min(1, { message: '入力必須です。' }),
  startMinute: z.string().min(1, { message: '入力必須です。' }),
  endHour: z.string().min(1, { message: '入力は必須です。' }),
  endMinute: z.string().min(1, { message: '入力必須です。' }),
})
.refine((data) => {
  // 開始時刻と終了時刻を分単位の数値に変換して比較
  const startTimeInMinutes = parseInt(data.startHour) * 60 + parseInt(data.startMinute);
  const endTimeInMinutes = parseInt(data.endHour) * 60 + parseInt(data.endMinute);
  // 終了時刻が開始時刻より後でなければならない
  return endTimeInMinutes > startTimeInMinutes;
}, {
  // refineでバリデーションエラーになった場合のエラーメッセージ
  message: '終了時間は開始時間より後の時刻にしてください。',
  // エラーメッセージをどのフィールドに関連付けるか
  path: ['endHour'], 
});

export type LearningRecordSchema = z.infer<typeof learningRecordSchema>;
