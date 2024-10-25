import { RatingRange, RatingRank } from '@/types/services'
import { z } from 'zod'

export const InstructorInputSchema = z.object({
  instructor_link: z
    .string()
    .min(1, 'Instructor link is required')
    .refine((value) => value.includes('https://www.udemy.com/user'), {
      message: "Instructor link must include the 'https://www.udemy.com/user'",
    }),
  instructor_name: z.string().min(1, 'Instructor name is required'),
})

export type InstructorInput = z.infer<typeof InstructorInputSchema>

// query
export const InstructorQuerySchema = z.object({
  search: z.string().optional(),
  ratingRange: z.string().optional(),
  ratingRank: z.string().optional(),
})

export type InstructorQueryInput = z.infer<typeof InstructorQuerySchema>
