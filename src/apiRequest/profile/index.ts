import { CommonResType } from '@/schemas/commonType'
import { User } from '@/types/User'
import { privateServerAPI } from '@/config/url'
import { axiosInstanceServer } from '@/config/axiosForServer'

const userApiRequest = {
    profile: (token: string) => axiosInstanceServer.get<CommonResType<User>>(privateServerAPI.userUrlApi.Profile, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export default userApiRequest