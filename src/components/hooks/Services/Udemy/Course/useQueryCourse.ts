import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CommonResType } from '@/schemas/commonType' 
import { CoursesResponseType } from '@/types/services'
import { PaginationQueryInput } from '@/types/common'
import useSWR from 'swr'

const getCourses = async (url: string): Promise<CoursesResponseType> => {
  const { data } = await axiosInstance.get<CommonResType<CoursesResponseType>>(url)
  return data.payload
}

export const useQueryCourses = (query: PaginationQueryInput & {instructor_id: number, search?: string}) => {
  const url = `${UrlApiUdemy.COURSE}?page=${query.page}&limit=${query.limit}&instructor_id=${query.instructor_id}${query?.search ? `&search=${query.search}`: ''}`

  const { data: courses, isLoading, mutate: refetch } = useSWR(url, getCourses)

  return { courses, isLoading, refetch }
}
