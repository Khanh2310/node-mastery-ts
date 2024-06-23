import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { type Metadata } from 'next'

import { Register as RegisterTemplate } from '@/components/templates/Register'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <>
      <RegisterTemplate />
    </>
  )
}
