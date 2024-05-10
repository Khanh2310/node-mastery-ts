import useSWRMutation from 'swr/mutation'
import axios from "axios"
import { LoginInput } from '@/schemas/Login'
import { User } from '@/types/User'
import { UrlApi } from '@/config/url'
import { RegistrationInput } from '@/schemas/Register'


export const axiosUnAuthInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
  })


  const fetcher = async (url: string, { arg }: { arg: LoginInput | RegistrationInput}): Promise<User> => {
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


  
export const useMutateRegister = () => {
  const url = UrlApi.REGISTER
  const { trigger: register, isMutating, data, error } = useSWRMutation(url, fetcher)


  return [
  async (formData: RegistrationInput) => {
    try {
      delete formData.confirmPassword
      const res = await register(formData)
      return res
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