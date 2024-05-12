'use client'
import axiosInstance from "@/config/axiosInstance"
import { AuthUrlApi } from "@/config/url"
import { CommonResType } from "@/schemas/commonType"
import { User } from "@/types/User"
import useSWR from "swr"

const isQuotaExceeded = (e: unknown) => {
    let quotaExceeded = false
    if (e instanceof DOMException) {
      if (e.code) {
        switch (e.code) {
          case 22:
            quotaExceeded = true
            break
          case 1014:
            // Firefox
            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
              quotaExceeded = true
            }
            break
        }
      }
    }
    return quotaExceeded
  }


  export const setToLocalStorage = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      if (isQuotaExceeded(e)) {
        console.error('Storage is not available')
      }
    }
  }



  export const setUserToLocalStorage = (user: User) => {
    setToLocalStorage('user', user.id.toString())
  }
   
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
  }

   
export const getUserFromLocalStorage = (): string | null => {
    const user = localStorage.getItem('user')
   
    if (user) {
      try {
        return user
      } catch (error) {
        return null
      }
    }
   
    return null
  }


  const getUser =  async (url: string): Promise<User> => {
    const { data } = await axiosInstance.get<CommonResType<User>>(url)
    if (data.payload) {
      setUserToLocalStorage(data.payload)
    }
    return data.payload
  }
   
  export const useQueryUser = () => {
    const url = AuthUrlApi.PROFILE
    
    const { data: user, error } = useSWR(url, getUser)
   
    return { user, error }
  }
   
  