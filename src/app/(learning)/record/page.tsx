"use client";
import { api } from "@/app/_utils/api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface learningRecord {
  category: string;
  timeSpent: number;
  content: string;
}
interface CreateLearningRecordRequestBody {
  userId: number;
  category: string;
  timeSpent: number;
  content: string;
}
interface CreateLearningRecordResponseBody {
  id: number;
  userId: number;
  category: string;
  timeSpent: number;
  content: string;
}

const Page = () => {
  const [learningTime, setLearningTime] = useState<number | "">("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<learningRecord>();
  //学習時間
  const handleLearningTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const time = value && Number(value) > 0 ? Number(value) : "";
    setLearningTime(time);
  };

  //学習時間（分）を時間と分で表示
  const formatLearningTime = (time: number | "") => {
    if (time === "") return;
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}時間${minutes}分`;
  };

  //学習記録の送信
  const onSubmit = async (data: learningRecord) => {
    try {
      const { category, timeSpent, content } = data;

      const userId = 1; // 例　要修正

      const res = await api.post<
        CreateLearningRecordRequestBody,
        CreateLearningRecordResponseBody
      >("/api/learning-records", { id, userId, category, timeSpent, content });
      // 成功時の処理をかく！
      console.log("学習記録が保存されました:", res);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error submitting form:", error.message);
        //  toast(error.message, { icon: "😭" });
      } else {
        console.error("Unexpected error:", error);
        // toast("予期しないエラーが発生しました。", { icon: "😭" });
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-6 max-w-md pb-24">
        <section className="flex items-center mb-6">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md mr-3 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-left w-5 h-5"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <h2 className="text-xl font-bold text-gray-800">学習記録</h2>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-lg border text-card-foreground bg-white/80 backdrop-blur-sm border-green-100 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <h3 className="font-semibold tracking-tight text-lg text-gray-800 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-book-open w-5 h-5 mr-2 text-green-600"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                今日の学習内容
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div>
                <label
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                  htmlFor="category"
                >
                  学習カテゴリ
                </label>
                <select
                  id="category"
                  {...register("category", {
                    required: "カテゴリーを選択してください",
                  })}
                  className="h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl"
                  defaultValue=""
                >
                  <option value="" disabled>
                    カテゴリを選択してください
                  </option>
                  <option value="漢字">漢字</option>
                  <option value="英語">英語</option>
                  <option value="数学">マーケティング</option>
                  <option value="歴史">統計</option>
                  <option value="科学">法律</option>
                  <option value="プログラミング">プログラミング</option>
                  <option value="その他">その他</option>
                </select>
                {errors.category ? (
                  <p className="text-red-500 pt-1 pl-4 text-sm">{`※${errors.category.message}`}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                  htmlFor="timeSpent"
                >
                  学習時間（分）
                </label>
                <input
                  className="flex h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl"
                  id="timeSpent"
                  placeholder="30"
                  type="number"
                  value={learningTime}
                  {...register("timeSpent", {
                    required: "学習時間は必須です",
                    min: 1,
                    onChange: handleLearningTime,
                  })}
                />
                {errors.timeSpent ? (
                  <p className="text-red-500 pt-1 pl-4 text-sm">{`※${errors.timeSpent.message}`}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                  htmlFor="content"
                >
                  学習メモ
                </label>
                <textarea
                  {...register("content", { required: "学習メモは必須です" })}
                  className="flex w-full border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-green-200 focus:border-green-400 rounded-2xl min-h-[120px]"
                  id="content"
                  placeholder="今日学んだことや感想を記録しましょう 例：新しい漢字を10個覚えました。読み方が難しかったですが、繰り返し練習して覚えることができました。"
                ></textarea>
                {errors.content ? (
                  <p className="text-red-500 pt-1 pl-4 text-sm">{`※${errors.content.message}`}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock w-6 h-6 text-emerald-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">今日の学習時間</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatLearningTime(learningTime)}
                  </p>
                </div>
              </div>
            </div>
          }
          <div className="space-y-3">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 rounded-2xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-save w-5 h-5 mr-2"
              >
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
              </svg>
              記録を保存
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 w-full border-green-200 text-green-700 hover:bg-green-50 py-6 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-sparkles w-5 h-5 mr-2"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              AI投稿文を生成
            </button>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200">
            <section className="p-4">
              <h3 className="text-sm font-medium text-teal-800 mb-2">
                💡 学習記録のコツ
              </h3>
              <ul className="text-sm text-teal-700 space-y-1">
                <li>• 具体的な学習内容を記録すると振り返りに役立ちます</li>
                <li>• 感想や気づきも一緒に記録しましょう</li>
                <li>• 毎日少しずつでも継続することが大切です</li>
                <li>• 困ったことや疑問も記録しておくと後で調べられます</li>
              </ul>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
