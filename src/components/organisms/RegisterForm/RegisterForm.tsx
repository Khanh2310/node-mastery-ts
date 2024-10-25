'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { useMutateRegister } from '@/components/hooks/Auth/useMutateAuth'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { RegistrationInput, RegistrationInputSchema } from '@/schemas/Register'
import { log } from 'console'
import { handleErrorApi } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type Values = RegistrationInput

type Props = {
  initialValues?: Partial<Values>
}

const defaultValues: Values = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  confirm_password: '',
  phone_number: ''
}

export const RegisterForm = ({ initialValues }: Props) => {
  const { toast } = useToast()
  const router = useRouter()
  const {registerTrigger, isMutating} = useMutateRegister()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(RegistrationInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
      await registerTrigger(values)
      toast({
        variant: 'default',
        title: 'Success',
        description: 'Create account successfully!',
      })
      reset()
      setTimeout(() => {
        router.push('/login')
        router.refresh()
      }, 5000)
    } catch (error: any) {
      
      console.log('error', error)
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
          labelProps={{ children: 'First name' }}
          textboxProps={register('first_name')}
          error={errors.first_name?.message}
          isRequired
        />

        <TextBoxWithLabel
          labelProps={{ children: 'last name' }}
          textboxProps={register('last_name')}
          error={errors.last_name?.message}
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Email address' }}
          textboxProps={{...register('email') , type: "email"}}
          error={errors.email?.message}
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Phone number' }}
          textboxProps={register('phone_number')}
          error={errors.phone_number?.message}
          isRequired
        />

        <TextBoxWithLabel
          labelProps={{ children: 'Password' }}
          className="col-span-full"
          textboxProps={{ ...register('password'), type: 'password' }}
          error={errors.password?.message}
          isRequired
        />

        <TextBoxWithLabel
          labelProps={{ children: 'Confirm password' }}
          className="col-span-full"
          textboxProps={{ ...register('confirm_password'), type: 'password' }}
          error={errors.confirm_password?.message}
          isRequired
        />
        <Button
          loading={isMutating}
          type="submit"
          variant="solid"
          color="blue"
          className="col-span-full mt-5"
          disabled={isSubmitting || isMutating}
        >
          Sign up <span className='ml-1' aria-hidden="true">&rarr;</span>
        </Button>
      </form>
    </>
  )
}
