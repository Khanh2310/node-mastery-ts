import { Inter, Lexend } from 'next/font/google'

import { type Metadata } from 'next'
import { Aside } from '@/components/organisms/SideBar'
import { PrivateLayout } from '@/components/layouts/PrivateLayout'

export const metadata: Metadata = {
  title: {
    template: '%s - Udemy Service',
    default: 'Udemy Service - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <Aside />
        <main className="lg:pl-72">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <PrivateLayout>{children}</PrivateLayout>
          </div>
        </main>
      </div>
    </>
  )
}
