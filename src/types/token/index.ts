export type Token = {
  accessToken: AccessToken
  refreshToken: RefreshToken
}

export type OptionsCookie = {
  expires: Date
  httpOnly: boolean
  path: string
  maxAge: number
  secure: boolean
  sameSite: string
}

export type AccessToken = {
  token: string
  options: OptionsCookie
}

export type RefreshToken = {
  token: string
  options: OptionsCookie
}
