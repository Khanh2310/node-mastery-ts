'use client'
import dashboard from '@/images/icons/udemy/dashboard.svg'
import user from '@/images/icons/udemy/user.svg'
import courses from '@/images/icons/udemy/course.svg'
import { classNames } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useId } from 'react'

type Props = {
  className?: string
}

export const Aside = ({ className }: Props) => {
  const pathname = usePathname()
  const listAside = [
    {
      id: useId(),
      title: 'Home',
      icon: dashboard,
      href: '/',
      className: '',
    },
    {
      id: useId(),
      title: 'Course',
      icon: courses,
      href: 'course-management',
      className: '',
    }
  ]
  return (
    <div className={`${className} space-y-5 bg-white pt-24 shadow-lg`}>
      {listAside?.map((item) => (
        <a
          key={item.id}
          href={`/service-udemy/${item.href}`}
          className={classNames(
            pathname === `/service-udemy/${item.href}` ||
              (pathname === `/service-udemy` && item.href === '/')
              ? 'bg-gray-100'
              : 'hover:bg-gray-200',
            `mx-auto flex w-[80%] flex-col items-center justify-center rounded-lg p-2 text-xs font-bold leading-normal transform duration-300 ease-in-out text-center`,
          )}
        >
          <Image
            src={item.icon}
            alt={'home'}
            className="h-8 w-8 text-gray-600"
            width={100}
            height={100}
          />
          <span>{item.title}</span>
        </a>
      ))}
    </div>
  )
}
