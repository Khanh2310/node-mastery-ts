import z from 'zod'

export enum LANGUAGE {
  EN = 'EN',
}

export const User = z.object({
  id: z.number(),
  avatar: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  language: z.nativeEnum(LANGUAGE),
  is_validate_email: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
})
