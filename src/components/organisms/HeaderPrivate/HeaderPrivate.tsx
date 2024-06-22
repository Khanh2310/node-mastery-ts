'use client'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelectedLayoutSegment } from 'next/navigation'

import { classNames } from '@/lib/utils'
import { AvatarCompany } from '@/components/atoms/AvatarCompany'
import { useQueryUser } from '@/components/hooks/User/useQueryUser'
import Link from 'next/link'

export const HeaderPrivate = () => {
  const { user } = useQueryUser()
  const segment = useSelectedLayoutSegment()
  const listMenu = [
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Top up',
      href: '/top-up',
    },
  ]

  return (
    <Disclosure as="nav" className="fixed w-full bg-white shadow z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <AvatarCompany />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  {listMenu.map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      className={classNames(
                        segment === item.href
                          ? 'border-indigo-500'
                          : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <AvatarCompany className="h-8 w-8 rounded-full" />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Transition
            enter="duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
          >
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 pb-4 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {listMenu.map((item) => (
                  <DisclosureButton
                    key={item.href}
                    as="a"
                    href={item.href}
                    className={classNames(
                      segment === item.href
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                      'block border-l-4  py-2 pl-3 pr-4 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
