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
}

export type InstructorResponse = {
  instructor: Instructor
}
