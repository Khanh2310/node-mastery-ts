'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { handleErrorApi } from '@/lib/utils'
import { CouponInput, CouponInputSchema } from '@/schemas/Services'
import { useMutateCreateCoupon } from '@/components/hooks/Services'

type Values = CouponInput

type Props = {
  initialValues?: Partial<Values> | null
  courseId: number
}

const defaultValues: Values = {
  coupon: '',
  start_date: '',
}

export const CouponForm = ({ initialValues, courseId }: Props) => {
  const { toast } = useToast()
  const { create, isMutating } = useMutateCreateCoupon()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues
      ? {
          ...defaultValues,
          ...initialValues,
          start_date: new Date(initialValues?.start_date as string)
            .toISOString()
            .split('T')[0],
        }
      : { ...defaultValues },
    resolver: zodResolver(CouponInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
      const res = await create({ ...values, course_id: courseId })
      toast({
        variant: 'default',
        title: 'Success!',
        description: res?.message ?? 'Instructor created successfully!',
      })
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: setError,
      })
    }
  }

  return (
    <>
      <form
        className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 bg-white p-5 rounded-md shadow-sm"
        onSubmit={handleSubmit(onValid)}
      >
        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Coupon' }}
          textboxProps={register('coupon')}
          error={errors.coupon?.message}
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Coupon start date' }}
          textboxProps={{ ...register('start_date'), type: 'date' }}
          error={errors.start_date?.message || errors.root?.start_date.message}
        />

        <Button
          loading={isMutating}
          type="submit"
          variant="solid"
          color="blue"
          className="col-span-full mt-5 rounded-md"
          disabled={isSubmitting || isMutating}
        >
          {initialValues ? 'Update' : 'Create'}
        </Button>
      </form>
    </>
  )
}
