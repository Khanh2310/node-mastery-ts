'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/molecules/ButtonCommon'
import { Container } from '@/components/Container'
import { Logo } from '@/components/atoms/Logo'
// import { NavLink } from '@/components/atoms/NavLink'
import { fullName } from '@/lib/utils'
import { useAuth } from '@/app/provider'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const { user } = useAuth()
  return (
    <Popover>
      <Popover.Button
        className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {/* <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" /> */}
            <MobileNavLink href={user ? '/dashboard' : '/login'}>
              {user ? user.email : 'Sign in'}
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export const Header = () => {
  const { user } = useAuth()

  return (
    <header className="fixed z-30 w-full bg-[#6C33B5] py-2 backdrop-blur-md">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center md:gap-x-2">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden font-bold text-white md:block md:text-2xl">
              Ignite Your Udemy Success
            </div>

            <div className="hidden md:flex md:gap-x-6">
              {/* <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink> */}
            </div>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <div className="hidden md:block">
              <Button
                href={user ? '/dashboard' : '/login'}
                color={user ? 'blue' : 'slate'}
              >
                {user ? fullName(user.first_name, user.last_name) : 'Sign in'}
              </Button>
            </div>
            {!user && (
              <Button href="/register" color="blue">
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              </Button>
            )}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
