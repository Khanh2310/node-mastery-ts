import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import { LoginInput } from '@/schemas/Login'
import { User } from '@/types/User'
import { AuthUrlApi } from '@/config/url'
import { RegistrationInput } from '@/schemas/Register'
import {
  ENTITY_ERROR_STATUS,
  EntityError,
  EntityErrorPayload,
  HttpError,
} from '@/lib/utils'

export const axiosUnAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

axiosUnAuthInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error
    const { data } = response
    if (response.status === ENTITY_ERROR_STATUS) {
      // throw new EntityError(
      //   data as {
      //     status: 422
      //     payload: EntityErrorPayload
      //   }
      // )

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
): Promise<User> => {
  const { data } = await axiosUnAuthInstance.post<User>(url, arg)
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
    error,
  ] as const
}

export const useMutateRegister = () => {
  const url = AuthUrlApi.REGISTER
  const {
    trigger: register,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

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
    error,
  ] as const
}
