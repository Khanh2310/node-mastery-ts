'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { LoginInputSchema, LoginInput } from '@/schemas/Login'
import { useMutateLogin } from '@/components/hooks/Auth/useMutateAuth'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { useRouter } from 'next/navigation'
import { handleErrorApi } from '@/lib/utils'

type Values = LoginInput

type Props = {
  initialValues?: Partial<Values>
}

const defaultValues: Values = {
  email: '',
  password: '',
}

export const LoginForm = ({ initialValues }: Props) => {
  const { toast } = useToast()
  const router = useRouter()
  const [login, isMutating] = useMutateLogin()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
       const res = await login(values)
      router.push('/')
      router.refresh()
    } catch (error: any) {
      if (error?.status === 401) {
        if (error.payload.message == 'Confirm your email first') {
          toast({
            variant: 'destructive',
            title: error.payload.message,
          })
        } else {
          handleErrorApi({
            error,
            setError: setError,
          })
        }
      } else
        toast({
          variant: 'destructive',
          title: 'Unexpected error occurred',
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
          labelProps={{ children: 'Email address' }}
          textboxProps={register('email')}
          error={errors.email?.message}
          isRequired
        />

        <TextBoxWithLabel
          className="col-span-full"
          labelProps={{ children: 'Password' }}
          textboxProps={{ ...register('password'), type: 'password' }}
          error={errors.password?.message}
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
          Sign in
        </Button>
      </form>
    </>
  )
}
