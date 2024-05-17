import { Token } from '@/types/token'
import { responseClient } from '@/utils/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('accessToken')

    console.log('sessionToken', sessionToken)

    try {

        
    } catch(e: any) {
        return Response.json(e.response.data ,{
            status: e.response.status
          })
    }
}
