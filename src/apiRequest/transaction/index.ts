import { axiosInstanceServer } from '@/config/axiosForServer'
import { privateServerAPI } from '@/config/url'
import { GenerateQRSInput } from '@/schemas/Transaction'
import { CommonResType } from '@/schemas/commonType'
import { TokeCallAPI } from '@/types/token'

const transactionApi = {
  generateQR: (data: TokeCallAPI<GenerateQRSInput>) =>
    axiosInstanceServer.post<CommonResType<any>>(
      privateServerAPI.userUrlApi.transaction.generateQR,
      {
        ...data.formData,
      },
      {
        headers: {
          Authorization: 'Bearer ' + data.token,
        },
      },
    ),

    confirm: (data: TokeCallAPI<GenerateQRSInput>) =>
        axiosInstanceServer.post<CommonResType<any>>(
          privateServerAPI.userUrlApi.transaction.confirm,
          {
            ...data.formData,
          },
          {
            headers: {
              Authorization: 'Bearer ' + data.token,
            },
          },
        ),
}

export default transactionApi
