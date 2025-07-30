export interface CreateLearningRecordRequestBody {
  categoryId: number
  title: string
  content: string
  startTime: Date
  endTime: Date
  duration: number
  learningDate: Date
}
export type CreateLearningRecordResponseBody = CreateLearningRecordRequestBody
