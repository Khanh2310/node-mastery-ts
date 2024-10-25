import { Coupon } from '../Coupon'

export enum CourseStatus {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type Course = {
  id: number
  course_link: string
  course_name: string
  instructor_name: string
  create_at: string
  status: CourseStatus
  rate_star: string | null
  course_rank: string
  s_rate_count: number
  s_enroll_count: number
  readyForRating: number
  Coupon: Coupon[]
}

export type CourseResponse = {
  course: Course
}

export type CoursesResponseType = {
  items: Course[] | []
  totalData: number
}
