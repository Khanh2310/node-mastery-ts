import { z } from 'zod'

export const InstructorInputSchema = z
  .object({
    instructor_link: z.string().min(1, 'Instructor link is required').refine(value => value.includes('https://www.udemy.com/user'), {
        message: "Instructor link must include the 'https://www.udemy.com/user'",
      }),
    instructor_name: z.string().min(1, 'Instructor name is required'),
  }) 

export type InstructorInput = z.infer<typeof InstructorInputSchema>
