export enum InstructorStatus {
  ALIVE = 'ALIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}

export type Instructor = {
  id: number
  instructor_link: string
  instructor_name: string
  management_group: string
  status: InstructorStatus
  created_at: string
  Course?: { id: string }[]
}

export type InstructorResponse = {
  instructor: Instructor
}

export type InstructorsResponseType = {
  items: Instructor[] | []
  totalData: number
}

export enum RatingRange {
  LOW = 'LOW',
  MIDDLE = 'MIDDLE',
  HIGHT = 'HIGH'
}

export enum RatingRank {
  HOT = 'HOT',
  NEW = 'NEW',
  BESTSELLER = 'BESTSELLER',
  HIGHEST_RATED = 'Highest rated'
}

