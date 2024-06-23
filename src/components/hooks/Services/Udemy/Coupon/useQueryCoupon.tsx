import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CommonResType } from '@/schemas/commonType'
import { Coupon } from '@/types/services'
import useSWR from 'swr'

const getCoupon = async (url: string): Promise<Coupon> => {
  const { data } = await axiosInstance.get<CommonResType<Coupon>>(url)
  return data.payload
}

export const useQueryCoupon = (query: { course_id: number }) => {
  const url = `${UrlApiUdemy.COUPON}?course_id=${query.course_id}`

  const { data: coupon, isLoading, mutate: refetch } = useSWR(url, getCoupon)

  return { coupon, isLoading, refetch }
}
