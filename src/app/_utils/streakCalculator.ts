/**
 * 学習記録の連続日数を計算するユーティリティ関数
 */

/**
 * 学習記録の日付から連続学習日数を計算する
 * @param learningDates 学習記録の日付配列
 * @returns 連続学習日数
 */
export const calculateStreak = (learningDates: Date[]): number => {
  // 学習記録がない場合は0を返す
  if (learningDates.length === 0) return 0;
  
  // 1. 日付を正規化（時刻を除去し、日付のみにする）
  const normalizedDates = learningDates.map(date => 
    new Date(date.getFullYear(), date.getMonth(), date.getDate())
  );
  
  // 2. 重複除去とソート（降順：新しい日付から古い日付へ）
  const uniqueDates = Array.from(new Set(normalizedDates.map(d => d.getTime())))
    .map(time => new Date(time))
    .sort((a, b) => b.getTime() - a.getTime());
  
  // 3. 今日の日付を取得（時刻を除去）
  const today = new Date();
  const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  // 4. 連続日数をカウント
  let streakCount = 0;
  let currentDate = new Date(todayNormalized);
  
  for (const recordDate of uniqueDates) {
    if (recordDate.getTime() === currentDate.getTime()) {
      // 現在の日付と一致する場合、カウントを増やす
      streakCount++;
      // 前日に移動
      currentDate = new Date(currentDate);
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      // 連続性が途切れた場合、カウントを停止
      break;
    }
  }
  
  return streakCount;
};

/**
 * 日付を正規化する（時刻を除去し、日付のみにする）
 * @param date 正規化する日付
 * @returns 正規化された日付
 */
export const normalizeDate = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * 日付配列から重複を除去し、降順でソートする
 * @param dates 日付配列
 * @returns 重複除去・ソート済みの日付配列
 */
export const deduplicateAndSortDates = (dates: Date[]): Date[] => {
  const normalizedDates = dates.map(normalizeDate);
  const uniqueDates = Array.from(new Set(normalizedDates.map(d => d.getTime())))
    .map(time => new Date(time))
    .sort((a, b) => b.getTime() - a.getTime());
  
  return uniqueDates;
};