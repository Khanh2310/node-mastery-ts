'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { handleErrorApi } from '@/lib/utils'
import { InstructorInput, InstructorInputSchema } from '@/schemas/Services'
import { useMutateCreateInstructor } from '@/components/hooks/Services'

type Values = InstructorInput

type Props = {
  initialValues?: Partial<Values>
}

const defaultValues: Values = {
  instructor_name: '',
  instructor_link: '',
}

export const InstructorForm = ({ initialValues }: Props) => {
  const { toast } = useToast()
  const { create, isMutating } = useMutateCreateInstructor()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(InstructorInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
      const res = await create(values)
      if(res.status === 200) {
        reset()
      }
      toast({
        variant: 'default',
        title: 'Success!',
        description:  res?.message ?? 'Instructor created successfully!',
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
          labelProps={{ children: 'Instructor link' }}
          textboxProps={register('instructor_link')}
          error={errors.instructor_link?.message}
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Instructor name' }}
          textboxProps={register('instructor_name')}
          error={errors.instructor_name?.message}
          isRequired
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
