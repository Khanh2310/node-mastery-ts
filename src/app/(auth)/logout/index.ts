import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const res = await request.json()
  const force = res.force as boolean | undefined
  if (force) {
    return Response.json(
      {
        message: 'Buộc đăng xuất thành công',
      },
      {
        status: 200,
        headers: {
          // Xóa cookie sessionToken
          'Set-Cookie': `accessToken=; Path=/; HttpOnly; Max-Age=0, refreshToken=; Path=/; HttpOnly; Max-Age=0`,
        },
      },
    )
  }
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('accessToken')
  if (!sessionToken) {
    return Response.json(
      { message: 'Không nhận được session token' },
      {
        status: 401,
      },
    )
  }
  //  call api logout
}
