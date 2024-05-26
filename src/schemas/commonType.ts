export type CommonResType<T> = {
  status: number
  timestamp: string
  path: string
  message: string
  payload: T
}
