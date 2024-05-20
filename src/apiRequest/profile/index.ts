import { CommonResType } from '@/schemas/commonType'
import { User } from '@/types/User'
import { privateServerAPI } from '@/config/url'
import { AxiosRequestConfig } from 'axios'
import { axiosInstanceServer } from '@/config/axiosForServer'

const userApiRequest = {
    profile: (config: AxiosRequestConfig<any> ) => axiosInstanceServer.get<CommonResType<User>>(privateServerAPI.userUrlApi.Profile, config)
}

export default userApiRequest