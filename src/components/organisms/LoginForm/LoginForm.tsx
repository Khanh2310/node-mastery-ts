'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { LoginInputSchema, LoginInput } from '@/schemas/Login'
import { useMutateLogin } from '@/components/hooks/Auth/useMutateLogin'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/molecules/ButtonCommon'

type Values = LoginInput

type Props = {
  initialValues?: Partial<Values>
}

const defaultValues: LoginInput = {
  email: '',
  password: '',
}

export const LoginForm = ({ initialValues }: Props) => {
    const { toast } = useToast()
  const [login, isMutating, data, error] = useMutateLogin()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  })

  const onValid = async (values: LoginInput) => {
    try {
        const user = await login(values)
        toast({
            variant: 'destructive',
            title: 'Incorrect username or password',
          })
      } catch (e) {
        console.error(e)
        toast({
            variant: 'destructive',
            title: "'Unexpected error occurred'",
          })
      } 
  }

  return (
    <>
      <form
        className="mt-4 grid grid-cols-1 gap-y-3 sm:gap-y-5"
        onSubmit={handleSubmit(onValid)}
      >
        <TextBoxWithLabel
          labelProps={{ children: 'Email address' }}
          textboxProps={register('email')}
          error={errors.email?.message}
          isRequired
        />

        <TextBoxWithLabel
          labelProps={{ children: 'Password' }}
          textboxProps={{ ...register('password'), type: 'password' }}
          error={errors.password?.message}
          isRequired
        />

        <Button type="submit" className="mt-5" disabled={isSubmitting}>
          Sign in
        </Button>
      </form>
    </>
  )
}
