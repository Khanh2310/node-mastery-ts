import userApiRequest from '@/apiRequest/Profile'
import { responseClient } from '@/utils/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken') as {
        name: string, value: string, path: string
    }
    
    try {
        const res = await userApiRequest.profile({
            headers: {
                'Authorization': 'Bearer ' + accessToken?.value
            }
        })
     
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
