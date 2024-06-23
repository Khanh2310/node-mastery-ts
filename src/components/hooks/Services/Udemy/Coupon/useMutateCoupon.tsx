import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CouponInput } from '@/schemas/Services'
import { CommonResType } from '@/schemas/commonType'
import { CouponResponse } from '@/types/services'
import useSWRMutation from 'swr/mutation'

const fetcher = async (
  url: string,
  { arg }: { arg: CouponInput & { course_id: number } },
): Promise<CommonResType<CouponResponse>> => {
  const { data } = await axiosInstance.post<CommonResType<CouponResponse>>(
    url,
    arg,
  )
  return data
}

export const useMutateCreateCoupon = () => {
  const url = UrlApiUdemy.COUPON
  const {
    trigger: create,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    create: async (formData: CouponInput & { course_id: number }) => {
      try {
        const res = await create(formData)
        return res
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    isMutating,
    data,
    error,
  }
}
