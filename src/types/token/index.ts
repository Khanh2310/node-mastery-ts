export type Token = {
  accessToken: AccessToken
  refreshToken: RefreshToken
}

export type AccessToken = {
  token: string
  expiresDate: string
}

export type RefreshToken = {
  token: string
  expiresDate: string
}
