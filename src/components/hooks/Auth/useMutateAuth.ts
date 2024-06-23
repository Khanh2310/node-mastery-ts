"user sever"
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import { LoginInput } from '@/schemas/Login'
import { UserResponse } from '@/types/User'
import { AuthUrlApi } from '@/config/url'
import { RegistrationInput } from '@/schemas/Register'
import {
  ENTITY_ERROR_STATUS,
  EntityErrorPayload,
} from '@/lib/utils'
import { setUserToLocalStorage } from '../User/useQueryUser'
import { CommonResType } from '@/schemas/commonType'

export const axiosUnAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

axiosUnAuthInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error
    const { data } = response
    if (response.status === ENTITY_ERROR_STATUS) {
      return Promise.reject({
        status: response.status,
        payload: data,
      } as {
        status: 422
        payload: EntityErrorPayload
      })
    } else {
      // throw new HttpError(data)
      return Promise.reject({
        status: response.status,
        payload: data,
      })
    }
  },
)

const fetcher = async (
  url: string,
  { arg }: { arg: LoginInput | RegistrationInput },
): Promise<CommonResType<UserResponse>> => {
  const { data } = await axiosUnAuthInstance.post<CommonResType<UserResponse>>(url, arg)
  return data
}

export const useMutateLogin = () => {
  const url = AuthUrlApi.LOGIN
  const {
    trigger: login,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    login: async (formData: LoginInput) => {
      try {
        const res = await login(formData)
        setUserToLocalStorage(res.payload.user)
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

export const useMutateRegister = () => {
  const url = AuthUrlApi.REGISTER
  const {
    trigger: register,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    registerTrigger: async (formData: RegistrationInput) => {
      try {
        delete formData.confirm_password
        const res = await register(formData)
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
