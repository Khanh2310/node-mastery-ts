import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { Toaster } from "@/components/ui/toaster"
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { AuthLayout } from '@/components/layouts/AuthLayout'

export const metadata: Metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
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
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <AuthLayout>{children}</AuthLayout>
        <Toaster />
      </body>
    </html>
  )
}
