import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'
import { BackgroundAuth } from '@/components/molecules/BackgroundAuth'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center px-5 items-center lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-7 py-10 shadow-2xl sm:justify-center h-fit md:flex-none md:px-28 md:py-32 rounded-lg">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </main>
        </div>
        <div className="contents relative flex-1">
          <BackgroundAuth />
        </div>
      </div>
    </>
  )
}
