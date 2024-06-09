import { type Metadata } from 'next'
import { HeaderPrivate } from '@/components/organisms/HeaderPrivate'

export const metadata: Metadata = {
  title: {
    template: '%s - Diligent Service',
    default: 'Diligent Service - Provide useful services',
  },
  description:
    'Providing Udemy services at affordable prices!',
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
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
