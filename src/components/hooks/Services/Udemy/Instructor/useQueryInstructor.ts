import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CommonResType } from '@/schemas/commonType'
import { InstructorsResponseType } from '@/types/services'
import { PaginationQueryInput } from '@/types/common'
import useSWR from 'swr'
import { InstructorQueryInput } from '@/schemas/Services'

const createUrl = (params?: { [key: string]: any }): string => {
  const url = `${UrlApiUdemy.INSTRUCTOR}`
  let query = '?'
  if (params)
    Object.keys(params).forEach((key) => {
      if (params[key]) query += `&${key}=${params[key]}`
    })
  return url + query
}

const getInstructors = async (
  url: string,
): Promise<InstructorsResponseType> => {
  const { data } =
    await axiosInstance.get<CommonResType<InstructorsResponseType>>(url)
  return data.payload
}

export const useQueryInstructors = (
  query: PaginationQueryInput & InstructorQueryInput,
) => {
  const url = createUrl(query)

  const {
    data: instructors,
    isLoading,
    mutate: refetch,
  } = useSWR(url, getInstructors)

  return { instructors, isLoading, refetch }
}
