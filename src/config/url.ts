export class AuthUrlApi {
  public static readonly LOGIN = '/auth/login'
  
  public static readonly LOGOUT = '/auth/logout'

  public static readonly REGISTER = '/auth/register'

  public static readonly REFRESH_TOKEN = '/auth/refresh-token'
}

export class UrlApi {
  public static readonly PROFILE = '/user/profile'

  public static readonly TRANSACTIONS = '/transactions'

  public static readonly GENERATE_QR = '/transactions/generate-qr'

  public static readonly CONFIRM_TRANSACTION =
    '/transactions/confirm-transactions'
}

export class UrlApiUdemy {
  public static readonly INSTRUCTOR = '/service/udemy/instructors'
  public static readonly COURSE = '/service/udemy/courses'
  public static readonly COUPON = '/service/udemy/coupons'
}
