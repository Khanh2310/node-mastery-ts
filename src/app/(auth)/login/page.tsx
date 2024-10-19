import { type Metadata } from 'next'
import { Login as LoginTemplate } from '@/components/templates/Login'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <LoginTemplate />
  )
}
