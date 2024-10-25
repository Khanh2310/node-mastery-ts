/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from '@/components/molecules/ButtonCommon'
import {
  useMutateGenerateQR,
  useMutateConfirmTopUp,
} from '@/components/hooks/Transactions/useMutateTransaction'
import { SelectBoxWithLabel } from '@/components/molecules/SelectBoxWithLabel'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { useToast } from '@/components/ui/use-toast'
import { handleErrorApi } from '@/lib/utils'

import { GenerateQRSchema, GenerateQRSInput } from '@/schemas/Transaction'
import { CURRENCY } from '@/types/transaction'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Transition } from '@headlessui/react'
import { useAuth } from '@/app/provider'

type Values = GenerateQRSInput

const defaultValues: Values = {
  amount: 10000,
  currency: CURRENCY.VND,
}

export default function DepositATM() {
  const [image, setImage] = useState('')
  const { toast } = useToast()
  const { user } = useAuth()
  const { generate, isMutating } = useMutateGenerateQR()
  const { confirmTopUp, isMutating: isConfirming } = useMutateConfirmTopUp()

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(GenerateQRSchema),
  })

  const onReInputAmount = () => {
    setImage('')
    reset()
  }

  const onValid = async (values: Values) => {
    try {
      const res = await generate(values)
      setImage(res.payload.data.qrDataURL)
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: setError,
      })
      toast({
        variant: 'destructive',
        title: error?.message || 'Unexpected error occurred',
      })
    }
  }

  const onConfirm = async () => {
    try {
      const values = getValues()
      const res = await confirmTopUp({
        amount: 1 * values.amount,
        currency: values.currency,
      })
      toast({
        variant: 'default',
        title: 'Success',
        description: 'We will check your request top up!',
      })
      onReInputAmount()
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error?.message || 'Unexpected error occurred',
      })
    }
  }

  return (
    <>
      <div className="">
        <h3 className="mb-2 text-lg font-semibold">Transfer by QR</h3>
        <ul className="text-base leading-normal">
          <li>
            <span className="font-semibold">Step 1:</span> Open the banking app
            and scan the QR code.
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> Make sure the
            transfer content is{' '}
            <span className="font-semibold text-yellow-500">{user?.phone_number}</span>
            .
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> Make payments.
          </li>
          <li className="text-sm">
            <span className="text-red-500">*</span>In case of incorrect content,
            we will not be responsible!
          </li>
        </ul>
        <p className="mt-10">
          Once you click '"Confirm, I have transferred", please wait a moment
          and the system will return a notification to you!
        </p>
      </div>
      <Transition
        show={!!image}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className=" flex flex-col items-center justify-center">
          <Button
            loading={isMutating || isConfirming}
            className="my-5 w-3/4 rounded-md bg-red-500 text-white hover:bg-red-400"
            onClick={onConfirm}
          >
            Confirm. I have transferred
          </Button>
          <Image
            src={image}
            alt="VietQR"
            className="m-auto h-auto w-3/4"
            width={500}
            height={700}
          />
          <Button
            loading={isMutating || isConfirming}
            variant="solid"
            color="blue"
            className="px-5"
            onClick={onReInputAmount}
          >
            Re-enter the price
          </Button>
        </div>
      </Transition>
      <form
        className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        onSubmit={handleSubmit(onValid)}
      >
        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Enter the amount you want to deposit' }}
          textboxProps={{
            ...register('amount'),
            min: 1,
            type: 'number',
            disabled: !!image,
          }}
          error={errors.amount?.message}
          isRequired
        />
        <SelectBoxWithLabel
          className="col-span-full"
          labelProps={{
            children: 'Currency',
          }}
          selectBoxProps={{
            ...register('currency'),
            children: (
              <>
                {Object.entries(CURRENCY).map(([key, value], i) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </>
            ),
            disabled: true,
          }}
          error={errors.currency?.message}
        />

        <Button
          variant="solid"
          color="blue"
          className="col-span-full mt-5"
          disabled={isSubmitting || isMutating || !!image}
          loading={isMutating || isConfirming}
          type="submit"
        >
          Generate QR
        </Button>
      </form>
    </>
  )
}
