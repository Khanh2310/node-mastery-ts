import userApiRequest from '@/apiRequest/profile'
import { Token } from '@/types/token'
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
                'Authorization': 'Bearer ' + accessToken.value
            }
        })
     
        return responseClient({
            status: 200,
            body: res.data
          })
        
    } catch(e: any) {
        return Response.json(e.response.data ,{
            status: e.response.status
          })
    }
}
