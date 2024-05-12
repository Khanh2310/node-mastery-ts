'use client'
import { Button } from '@/components/molecules/ButtonCommon'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import axiosInstance from '@/config/axiosInstance'
import { UrlApi } from '@/config/url'
import { CommonResType } from '@/schemas/commonType'
import Image from 'next/image'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

export default function Recharge() {
  const [image, setImage] = useState()
  const [price, setPrice] = useState(100000)

  const fetcher = async (
    url: string,
    { arg }: { arg: number },
  ): Promise<CommonResType<any>> => {
    const { data } = await axiosInstance.post<CommonResType<any>>(url, {
      price: arg,
    })
    return data
  }

  const { trigger } = useSWRMutation(UrlApi.GENERATE_QR, fetcher)

  const { trigger: confirm } = useSWRMutation(UrlApi.CONFIRM_TRANSACTION, fetcher);
  return (
    <>
      <TextBoxWithLabel
        className="col-span-full"
        labelProps={{ children: 'Enter the amount you want to deposit' }}
        textboxProps={{
          value: price,
          min: 100000,
          type: 'number',
          onChange: (e) => {
            setPrice(parseInt(e.target.value))
          },
        }}
        isRequired
      />

      <Button
        variant="solid"
        color="blue"
        className="mt-5"
        onClick={async () => {
          // Trigger `updateUser` with a specific argument.
          try {
            const result = await trigger(price)
            if (result?.payload?.data.qrDataURL) {
              setImage(result?.payload?.data.qrDataURL)
            }
          } catch (e) {
            // error handling
          }
        }}
      >
        Submit
      </Button>

      {image && (
        <Button
          variant="solid"
          color="blue"
          className="mt-10"
          onClick={async () => {
            // Trigger `updateUser` with a specific argument.
            try {
              const result = await confirm(price)
              if (result?.payload?.data.qrDataURL) {
                setImage(result?.payload?.data.qrDataURL)
              }
            } catch (e) {
              // error handling
            }
          }}
        >
          Confirm transactions
        </Button>
      )}

      {image && <Image src={image} alt="VietQR" width={500} height={700} />}
    </>
  )
}
