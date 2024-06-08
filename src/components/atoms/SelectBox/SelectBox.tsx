import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
 
export const SelectBox = forwardRef<HTMLSelectElement, ComponentPropsWithoutRef<'select'>>(function SelectboxBase(
  { className = '', ...props },
  ref
) {
  return (
    <select
      className={`${className} text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200 disabled:bg-gray-300 disabled:text-gray-500`}
      {...props}
      ref={ref}
    />
  )
})