import z from 'zod'

export const GenerateQRSchema = z.object({
  price: z.coerce.number().positive(),
})

export type GenerateQRSInput = z.TypeOf<typeof GenerateQRSchema>
