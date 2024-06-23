export enum CouponStatus {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED"
}

export type Coupon = {
    id: number
    coupon: string
    course_id: number
    status: CouponStatus
    start_date: string
    expire_date: string
}

export type CouponResponse = {
    coupon: Coupon
  }
  