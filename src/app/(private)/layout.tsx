import { Inter, Lexend } from 'next/font/google'

import { type Metadata } from 'next'
import { PrivateLayout } from '@/components/layouts/PrivateLayout'
import { HeaderPrivate } from '@/components/organisms/HeaderPrivate'

export const metadata: Metadata = {
  title: {
    template: '%s - Udemy Service',
    default: 'Udemy Service - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <HeaderPrivate />
        <main className='py-24'>
          {children}
        </main>
      </div>
    </>
  )
}
