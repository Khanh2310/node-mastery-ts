import axiosInstance from "@/config/axiosInstance"
import { UrlApiUdemy } from "@/config/url"
import { InstructorInput } from "@/schemas/Services"
import { CommonResType } from "@/schemas/commonType"
import { InstructorResponse } from "@/types/services"
import useSWRMutation from "swr/mutation"

const fetcher = async (
  url: string,
  { arg }: { arg: InstructorInput },
): Promise<CommonResType<InstructorResponse>> => {
  const { data } = await axiosInstance.post<CommonResType<InstructorResponse>>(
    url,
    arg,
  )
  return data
}

export const useMutateCreateInstructor = () => {
  const url = UrlApiUdemy.CREATE_INSTRUCTOR
  const {
    trigger: create,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    create: async (formData: InstructorInput) => {
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
