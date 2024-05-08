import useSWRMutation from 'swr/mutation'
import axios from "axios"
import { LoginInput } from '@/schemas/Login'
import { User } from '@/types/User'
import { UrlApi } from '@/config/url'


export const axiosUnAuthInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
  })


  const fetcher = async (url: string, { arg }: { arg: LoginInput}): Promise<User> => {
    const { data } = await axiosUnAuthInstance.post<User>(url, arg)
    return data
  }
   

export const useMutateLogin = () => {
    const url = UrlApi.LOGIN
    const { trigger: login, isMutating, data, error } = useSWRMutation(url, fetcher)


    return [
    async (formData: LoginInput) => {
      try {
        const user = await login(formData)
        return user
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    isMutating,
    data,
    error
  ] as const
  }