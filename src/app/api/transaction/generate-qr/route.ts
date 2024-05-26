import transactionApi from '@/apiRequest/transaction'
import { GenerateQRSInput } from '@/schemas/Transaction'
import { CookieToken } from '@/types/token'
import { responseClient } from '@/utils/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken') as CookieToken
    const body = await request.json() as GenerateQRSInput

    if(!accessToken) {
        return responseClient({
            status: 401,
            body: 'Unauthorized'
          })
    }
    
    try {
        const res = await transactionApi.generateQR({
            formData: body,
            token: accessToken?.value
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
