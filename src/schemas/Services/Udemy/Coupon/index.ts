import { z } from 'zod'

export const CouponInputSchema = z
  .object({
    coupon: z.string().min(1, 'Coupon is required'),
    start_date: z.string(),
  }) 

export type CouponInput = z.infer<typeof CouponInputSchema>
