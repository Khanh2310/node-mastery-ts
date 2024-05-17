import axios from 'axios'

import { getUserFromLocalStorage, removeUserFromLocalStorage } from '@/components/hooks/User/useQueryUser'
import envConfig from '@/config/env'
import { AuthUrlApi } from '@/config/url'

const axiosInstance = axios.create({
  baseURL: envConfig.API_URL,
  withCredentials: true
})

let isRefreshing = false
let failedQueue: { resolve: (value: unknown) => void; reject: (reason?: unknown) => void }[] = []

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
                Accept: 'application/json, text/plain, */*'
              }
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
            withCredentials: true
          })
          .then(({ data }) => {
            processQueue(null, data.token)
            resolve(
              axios({
                ...config,
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              })
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
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
