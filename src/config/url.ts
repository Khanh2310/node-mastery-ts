export class AuthUrlApi {
  public static readonly LOGIN = '/auth/login'

  public static readonly REGISTER = '/auth/register'

  public static readonly REFRESH_TOKEN = '/auth/refresh-token'
}

export class UrlApi {
  public static readonly PROFILE = '/profile'

  public static readonly GENERATE_QR = '/transactions-history/generate-qr'

  public static readonly CONFIRM_TRANSACTION = '/transactions-history/confirm-transactions'
}

export const privateServerAPI = {
  authUrlApi: {
    Login: "/auth/login",
    Register: "/auth/register"
  },
  userUrlApi: {
    profile: '/user/profile'
  }
}
