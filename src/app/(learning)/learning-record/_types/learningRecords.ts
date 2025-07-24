export interface learningRecord {
  category: string;
  timeSpent: number;
  content: string;
}
export interface CreateLearningRecordRequestBody {
  userId: string;
  categoryId: number;
  title: string;
  content: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  learningDate: Date;
}
export interface CreateLearningRecordResponseBody {
  userId: string;
  categoryId: number;
  title: string;
  content: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  learningDate: Date;
}
