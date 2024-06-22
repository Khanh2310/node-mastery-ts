import axios from 'axios'

import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '@/components/hooks/User/useQueryUser'
import envConfig from '@/config/env'
import { AuthUrlApi } from '@/config/url'
import { ENTITY_ERROR_STATUS, EntityErrorPayload } from '@/lib/utils'

const axiosInstance = axios.create({
  baseURL: envConfig.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

let isRefreshing = false
let failedQueue: {
  resolve: (value: unknown) => void
  reject: (reason?: unknown) => void
}[] = []

const processQueue = (error: null, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error
    const { data } = response

    if (response.status === 401 && !config._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        })
          .then(() => {
            return axios({
              ...config,
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/plain, */*',
              },
            })
          })
          .catch((err) => {
            return err
          })
      }

      config._retry = true
      isRefreshing = true

      return new Promise((resolve, reject) => {
        axios
          .get(AuthUrlApi.REFRESH_TOKEN, {
            baseURL: envConfig.NEXT_PUBLIC_API_URL,
            timeout: 30000,
            withCredentials: true,
          })
          .then(({ data }) => {
            processQueue(null, data.token)
            resolve(
              axios({
                ...config,
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*',
                },
              }),
            )
          })
          .catch((err) => {
            processQueue(err, null)
            const user = getUserFromLocalStorage()
            removeUserFromLocalStorage()
            reject(err)
            if (err?.response?.status === 401 && user) {
              location.reload()
            }
          })
          .then(() => {
            isRefreshing = false
          })
      })
    } else if (response.status === 401 && config._retry) {
      return Promise.reject(error)
    }
    if (response.status === ENTITY_ERROR_STATUS) {
      return Promise.reject({
        status: response.status,
        payload: data,
      } as {
        status: 422
        payload: EntityErrorPayload
      })
    } else {
      // throw new HttpError(data)
      return Promise.reject({
        status: response.status,
        payload: data,
      })
    }
  },
)

export default axiosInstance
