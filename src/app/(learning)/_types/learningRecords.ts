export interface learningRecord {
  category: string;
  timeSpent: number;
  content: string;
}
export interface CreateLearningRecordRequestBody {
  userId: number;
  category: string;
  timeSpent: number;
  content: string;
}
export interface CreateLearningRecordResponseBody {
  userId: number;
  category: string;
  timeSpent: number;
  content: string;
}
