import axiosInstance from '@/config/axiosInstance'
import { UrlApiUdemy } from '@/config/url'
import { CourseInput } from '@/schemas/Services'
import { CommonResType } from '@/schemas/commonType'
import { CourseResponse } from '@/types/services'
import useSWRMutation from 'swr/mutation'

const fetcher = async (
  url: string,
  { arg }: { arg: CourseInput & { instructor_id: number } },
): Promise<CommonResType<CourseResponse>> => {
  const { data } = await axiosInstance.post<CommonResType<CourseResponse>>(
    url,
    arg,
  )
  return data
}

export const useMutateCreateCourse = () => {
  const url = UrlApiUdemy.COURSE
  const {
    trigger: create,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    create: async (formData: CourseInput & { instructor_id: number }) => {
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
