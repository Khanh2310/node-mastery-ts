import { z } from 'zod'

export const RegistrationInputSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .regex(/^([a-zA-Z0-9@#\$%&?!]+)$/, 'Special characters can be used for password')
      .min(6, 'New password must be at least 6 characters')
      .max(32, 'New password must be no longer than 32 characters')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])+/, 'Password requirements has not been reached'),
    confirmPassword: z.string().min(1, 'Confirm password is required').optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Confirm password must match password exactly',
    path: ['confirmPassword']
  })

export type RegistrationInput = z.infer<typeof RegistrationInputSchema>
