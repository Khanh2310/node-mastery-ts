import axiosInstance from '@/config/axiosInstance'
import { UrlApi } from '@/config/url'
import { CommonResType } from '@/schemas/commonType'
import { GenerateQRSInput } from '@/schemas/Transaction'
import { GenerateQRResponse } from '@/types/transaction'
import useSWRMutation from 'swr/mutation'

const fetcher = async (
  url: string,
  { arg }: { arg: GenerateQRSInput },
): Promise<CommonResType<GenerateQRResponse>> => {
  const { data } = await axiosInstance.post<CommonResType<GenerateQRResponse>>(url, arg)
  return data
}

// export const { trigger } = useSWRMutation(UrlApi.GENERATE_QR, fetcher)
// export const { trigger: confirm } = useSWRMutation(
//   UrlApi.CONFIRM_TRANSACTION,
//   fetcher,
// )

export const useMutateConfirmTopUp = () => {
  const url = UrlApi.CONFIRM_TRANSACTION
  const {
    trigger: confirmTopUp,
    isMutating,
    data,
    error,
  } = useSWRMutation(url, fetcher)

  return {
    confirmTopUp: async (formData: GenerateQRSInput) => {
      try {
        const res = await confirmTopUp(formData)
        return res
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    isMutating,
    data,
    error,
  } 
}


export const useMutateGenerateQR = () => {
    const url = UrlApi.GENERATE_QR
    const {
      trigger: generate,
      isMutating,
      data,
      error,
    } = useSWRMutation(url, fetcher)
  
    return {
      generate: async (formData: GenerateQRSInput) => {
        try {
          const res = await generate(formData)
          return res
        } catch (e) {
          console.error(e)
          throw e
        }
      },
      isMutating,
      data,
      error,
    } 
  }
