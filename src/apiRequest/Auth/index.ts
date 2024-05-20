import axios, { AxiosRequestConfig } from 'axios'
import { LoginInput } from '@/schemas/Login'
import { CommonResType } from '@/schemas/commonType'
import { UserResponse } from '@/types/User'
import { privateServerAPI } from '@/config/url'
import envServerConfig from '@/config/evnServer'
import { RegistrationInput } from '@/schemas/Register'
import { axiosInstanceServer } from '@/config/axiosForServer'

const axiosInstance = axios.create({
    baseURL: envServerConfig.API_URL,
    withCredentials: true
  })


const authApiRequest = {
    login: (body: LoginInput) => axiosInstance.post<CommonResType<UserResponse>>(privateServerAPI.authUrlApi.Login, body),
    register: (body: RegistrationInput) => axiosInstance.post<CommonResType<UserResponse>>(privateServerAPI.authUrlApi.Register, body),
    refreshToken: (config: AxiosRequestConfig<any> ) => axiosInstanceServer.get<CommonResType<UserResponse>>(privateServerAPI.userUrlApi.RefreshToken, config)
}

export default authApiRequest