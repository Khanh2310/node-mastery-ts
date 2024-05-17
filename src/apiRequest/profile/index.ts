import { CommonResType } from '@/schemas/commonType'
import axiosInstance from '@/config/axiosInstance'
import { User } from '@/types/User'
import { privateServerAPI } from '@/config/url'

const userApiRequest = {
    profile: () => axiosInstance.get<CommonResType<User>>(privateServerAPI.userUrlApi.profile)
}

export default userApiRequest