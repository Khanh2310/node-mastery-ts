'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { LoginInputSchema, LoginInput } from '@/schemas/Login'
import { useMutateLogin } from '@/components/hooks/Auth/useMutateAuth'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'
import { useRouter } from 'next/navigation'

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
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  })

  const onValid = async (values: Values) => {
    try {
      await login(values)
      router.push('/')
    } catch (error: any) {
      if (error.response.status === 401) {
        if (error.response.data.message == 'Confirm your email first') {
          toast({
            variant: 'destructive',
            title: error.response.data.message ,
          })
      } else {
        toast({
          variant: 'destructive',
          title: 'Incorrect username or password',
        })
      }
      toast({
        variant: 'destructive',
        title: 'Unexpected error occurred',
      })
    }
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