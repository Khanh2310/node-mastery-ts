'use client'
import { HeaderPrivate } from '@/components/organisms/HeaderPrivate'
import { useAuth } from '../provider'
import { Loading } from '@/components/atoms/Loading'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { loading, user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [loading, user, router])

  if (loading) {
    return <Loading className="mt-20" />
  }
  if (!user) {
    return null // This ensures the page does not flicker before redirecting
  }

  return (
    <>
      <div>
        <HeaderPrivate user={user} logout={logout} />
        <main>{children}</main>
      </div>
    </>
  )
}
