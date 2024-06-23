'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { handleErrorApi } from '@/lib/utils'
import { CourseInput, CourseInputSchema } from '@/schemas/Services'
import { useMutateCreateInstructor } from '@/components/hooks/Services'
import { useMutateCreateCourse } from '@/components/hooks/Services/Udemy/Course'

type Values = CourseInput

type Props = {
  instructorId: number
  initialValues?: Partial<Values>
}

const defaultValues: Values = {
  course_link: '',
  course_name: '',
  coupon: '',
  start_date: '',
}

export const CourseForm = ({ initialValues, instructorId }: Props) => {
  const { toast } = useToast()
  const { create, isMutating } = useMutateCreateCourse()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(CourseInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
      const res = await create({...values, instructor_id: instructorId})
      if (res.status === 200) {
        reset()
      }
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
        className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        onSubmit={handleSubmit(onValid)}
      >
        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Course link' }}
          textboxProps={register('course_link')}
          error={
            errors.course_link?.message || errors.root?.course_link.message
          }
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Course name' }}
          textboxProps={register('course_name')}
          error={
            errors.course_name?.message || errors.root?.course_name.message
          }
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Coupon' }}
          textboxProps={register('coupon')}
          error={
            errors.course_name?.message || errors.root?.course_name.message
          }
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
          Create
        </Button>
      </form>
    </>
  )
}
