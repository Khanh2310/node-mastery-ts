'use client'
import { AuthLayout } from '@/components/layouts/AuthLayout'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../provider'
import { Loading } from '@/components/atoms/Loading'

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { loading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!!user) {
      router.push('/')
    }
  }, [user, router])

  if (loading) {
    return <Loading className="mt-20" />
  }
  if (user) {
    return null // This ensures the page does not flicker before redirecting
  }

  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  )
}
