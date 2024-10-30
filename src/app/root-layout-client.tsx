'use client'
import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import Loader from '@/components/organisms/Loader/Loader'
export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [initialLoading, setInitialLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {initialLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Loader />
        </div>
      ) : (
        <>
          {children}
          <Toaster />
        </>
      )}
    </>
  )
}
