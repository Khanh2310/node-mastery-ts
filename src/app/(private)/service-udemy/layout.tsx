import { type Metadata } from 'next'
import { Aside } from '@/components/organisms/Services/Udemy/Aside'

export const metadata: Metadata = {
  title: {
    template: '%s - Diligent Service',
    default: 'Diligent Service - Provide useful services',
  },
  description: 'Providing Udemy services at affordable prices!',
}

export default function UdemyServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-dvh">
      <Aside className="w-full max-w-24" />
      <div className="w-[90%] mx-auto max-w-[calc(100%-96px)] pt-24 bg-gray-100">{children}</div>
    </div>
  )
}
