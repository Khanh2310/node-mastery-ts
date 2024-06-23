import { z } from 'zod'

export const CourseInputSchema = z.object({
  course_link: z
    .string()
    .min(1, 'Course link is required')
    .refine((value) => value.includes('https://www.udemy.com'), {
      message: "Course link must include the 'https://www.udemy.com'",
    }),
  course_name: z.string().min(1, 'Course name is required'),
  coupon: z.string().min(1, 'Coupon is required'),
  start_date: z.string(),
})

export type CourseInput = z.infer<typeof CourseInputSchema>
