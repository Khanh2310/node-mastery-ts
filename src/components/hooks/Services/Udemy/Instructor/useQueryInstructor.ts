import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CommonResType } from '@/schemas/commonType' 
import { InstructorsResponseType } from '@/types/services'
import { PaginationQueryInput } from '@/types/common'
import useSWR from 'swr'

const getInstructors = async (url: string): Promise<InstructorsResponseType> => {
  const { data } = await axiosInstance.get<CommonResType<InstructorsResponseType>>(url)
  return data.payload
}

export const useQueryInstructors = (query: PaginationQueryInput) => {
  const url = `${UrlApiUdemy.INSTRUCTOR}?page=${query.page}&limit=${query.limit}`

  const { data: instructors, isLoading } = useSWR(url, getInstructors)

  return { instructors, isLoading }
}
