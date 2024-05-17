import axios from 'axios'
import { LoginInput } from '@/schemas/Login'
import { CommonResType } from '@/schemas/commonType'
import { UserResponse } from '@/types/User'
import { privateServerAPI } from '@/config/url'
import envServerConfig from '@/config/evnServer'

const axiosInstance = axios.create({
    baseURL: envServerConfig.API_URL,
    withCredentials: true
  })


const authApiRequest = {
    login: (body: LoginInput) => axiosInstance.post<CommonResType<UserResponse>>(privateServerAPI.authUrlApi.Login, body),
}

export default authApiRequest