import authApiRequest from "@/apiRequest/Auth"
import { LoginInput } from "@/schemas/Login"
import { createSetCookieHeader, responseClient } from "@/utils/server"

export async function POST(request: Request) {
    const body = await request.json() as LoginInput
    try {
      const res =  await authApiRequest.login(body)
      const {token} = res.data.payload

      const cookies = [
        createSetCookieHeader('accessToken', token.accessToken.token, {
          expires: token.accessToken.options.expires,
          httpOnly: token.accessToken.options.httpOnly,
          path: token.accessToken.options.path,
          maxAge: token.accessToken.options.maxAge,
          secure: token.accessToken.options.secure,
          sameSite: token.accessToken.options.sameSite
        }),
        createSetCookieHeader('refreshToken', token.refreshToken.token, {
          expires: token.refreshToken.options.expires,
          httpOnly: token.refreshToken.options.httpOnly,
          path: token.refreshToken.options.path,
          maxAge: token.refreshToken.options.maxAge,
          secure: token.refreshToken.options.secure,
          sameSite: token.refreshToken.options.sameSite
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
    }
    catch(e: any) {
      console.error(e?.response?.data || e.response)
      return responseClient({
        status: e.response.status,
        body: e.response.data
      })
    }
  }