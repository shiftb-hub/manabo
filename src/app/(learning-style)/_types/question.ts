import { StyleType } from "./learningType"
export interface Question  {
  id: number
  text: string
  options: {
    id: string
    label: string
    type: StyleType
  }[]
}
