import authApiRequest from '@/apiRequest/Auth'
import { createSetCookieHeader, responseClient } from '@/utils/server'
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken') as {
        name: string, value: string, path: string
    }
    
    try {
        const res = await authApiRequest.refreshToken({
            headers: {
                'Authorization': 'Bearer ' + refreshToken?.value
            }
        })
        const {token} = res.data.payload

        const cookies = [
            createSetCookieHeader('accessToken', token.accessToken.token, {
              expires: token.accessToken.options.expires,
              httpOnly: token.accessToken.options.httpOnly,
              path: token.accessToken.options.path,
              maxAge: token.accessToken.options.maxAge,
              secure: token.accessToken.options.secure,
              sameSite: token.accessToken.options.sameSite
            })
          ];
    
          return responseClient({
            status: 200,
            headerData: {
              'Set-Cookie': cookies.join(', ')
            },
            body: {
              ...res.data,
              payload:{
                user: res.data.payload.user,
                
              } 
            }
          })
    } catch(e: any) {
      console.error(e?.response?.data || e.response)
      return responseClient({
        status: e.response?.status,
        body: e.response?.data
      })
    }
}
