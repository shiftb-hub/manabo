//学習記録のスキーマ定義
import z from "zod";

export const learningRecordSchema = z.object({
  category: z.string(),
  timeSpent: z.coerce.number().min(15, "時間は必須です。分単位で入力してください"),
  content: z.string().min(1, "内容は必須です"),
});

export type LearningRecordSchema = z.infer<typeof learningRecordSchema>;
