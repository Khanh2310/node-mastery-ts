import { Token } from '@/types/token'
import { responseClient } from '@/utils/server'

export async function POST(request: Request) {
  const body = await request.json()
  const token = body.token as Token

  if (!token) {
    return responseClient({
      status: 400,
      body: {
        payload: { message: 'Không nhận được session token', status: 400 },
      },
    })
  }

  responseClient({
    status: 200,
    body: { payload: { message: 'success', status: 200 } },
    headerData: {
      'Set-Cookie': [
        `sessionToken=${token.accessToken.token}; Path=/; HttpOnly; Expires=${token.accessToken.expiresDate}; SameSite=Lax; Secure`,
        `sessionToken=${token.refreshToken.token}; Path=/; HttpOnly; Expires=${token.refreshToken.expiresDate}; SameSite=Lax; Secure`,
      ],
    },
  })
}
