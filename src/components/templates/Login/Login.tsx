import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { LoginForm } from '@/components/organisms/LoginForm'

export const Login = () => {
  return (
    <>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-10 text-lg font-bold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up{' '}
        </Link>
        for a free trial.
      </p>
      <LoginForm/>
    </>
  )
}
