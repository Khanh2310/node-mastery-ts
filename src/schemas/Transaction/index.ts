import z from 'zod'

export const GenerateQRSchema = z.object({
  amount: z.coerce.number().positive().min(1),
  currency:  z.string().min(1, 'Currency is required'),
})

export type GenerateQRSInput = z.TypeOf<typeof GenerateQRSchema>
