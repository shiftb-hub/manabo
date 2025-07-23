import z from "zod";

export const learningRecordSchema = z
  .object({
    categoryId: 
    // z.number().refine((val) => !isNaN(val), {
    //   message: "数値を入力してください",
    // }),
     z.number()
      .int() // 整数であることを保証
      .min(1, "カテゴリーを選択してください。"), // 0より大きい値（有効なID）であることを保証
    title: z.string().min(1, "タイトルは入力必須です。"),
    content: z.string().min(3, "学習メモは入力必須です。"),
    learningStartDate: z
      .string()
      .min(1, "開始日を入力してください。")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "日付はYYYY-MM-DD形式で入力してください。"),
    
    // ✅ learningEndDateのバリデーションを有効にする
    learningEndDate: z
      .string()
      .min(1, "終了日を入力してください。") 
      .regex(/^\d{4}-\d{2}-\d{2}$/, "日付はYYYY-MM-DD形式で入力してください。"),

    startTime: z
      .string()
      .min(1, "開始時間を入力してください。")
      .regex(
        /^([01]\d|2[0-3]):[0-5]\d$/, // input[type=time]は秒を返さないため、秒部分を削除
        "時刻はHH:mm形式で入力してください。"
      ),

    endTime: z
      .string()
      .min(1, "終了時間を入力してください。")
      .regex(
        /^([01]\d|2[0-3]):[0-5]\d$/, // input[type=time]は秒を返さないため、秒部分を削除
        "時刻はHH:mm形式で入力してください。"
      ),
  })
  .refine(
    (data) => {
      // learningEndDateのバリデーションが有効になったことで、このチェックが正しく機能する
      const start = new Date(`${data.learningStartDate}T${data.startTime}`).getTime();
      const end = new Date(`${data.learningEndDate}T${data.endTime}`).getTime();
      
      // いずれかのフィールドが未入力または形式不正の場合、このバリデーションは実行しない
      // (各フィールドのバリデーションに任せる)
      if (isNaN(start) || isNaN(end)) {
        return false;
      }
      
      // 終了日時が開始日時より後であることを確認
      return end > start;
    },
    {
      message: "終了日時は開始日時より後の時刻にしてください。",
      path: ["endTime"], // エラーメッセージを `endTime` フィールドに適用
    }
  );

export type LearningRecordSchema = z.infer<typeof learningRecordSchema>;