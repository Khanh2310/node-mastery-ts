import userApiRequest from '@/apiRequest/profile'
import { CookieToken } from '@/types/token'
import { responseClient } from '@/utils/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken') as CookieToken

    if(!accessToken) {
        return responseClient({
            status: 401,
            body: 'Unauthorized'
          })
    }
    
    try {
        const res = await userApiRequest.profile(accessToken?.value)
     
        return responseClient({
            status: 200,
            body: res?.data
          })
        
    } catch(e: any) {
        console.error(e?.response?.data || e.response)
        return responseClient({
          status: e.response?.status,
          body: e.response?.data
        })
    }
}
