import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { Toaster } from '@/components/ui/toaster'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Providers } from './provider'
import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = {
  title: {
    template: '%s - Udemy Service',
    default: 'Udemy Growth: Ignite Your Udemy Success',
  },
  description:
    'Real Traffic, Real Students, Real Revenue!Are you a dedicated Udemy instructor looking to boost your course enrollments and improve your ratings? Look no further!Our innovative service is designed specifically for existing Udemy instructors who want to maximize their potential without compromising their account safety.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={clsx(
          'h-full scroll-smooth bg-white antialiased',
          inter.variable,
          lexend.variable,
        )}
      >
        <body
          suppressHydrationWarning={true}
          className="scrollbar-thin flex h-full flex-col"
        >
          <Providers>
            <>
              {children}
              <Toaster />
            </>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
