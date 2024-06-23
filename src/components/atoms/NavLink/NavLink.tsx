import Link from 'next/link'

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
        <Link
          href={href}
          className={`${className} inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900`}
        >
          {children}
        </Link>
    </>
  )
}
