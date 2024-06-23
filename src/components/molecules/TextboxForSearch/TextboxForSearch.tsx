import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
  
import { Textbox } from '@/components/atoms/TextBox'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
  
 
type Props = {
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  labelProps: Omit<ComponentPropsWithoutRef<'label'>, 'htmlFor' | 'className'>
  textboxProps: Omit<ComponentPropsWithRef<'input'>, 'id'>
  resetSearch: () => void
}
 
export const TextboxForSearch = ({
  className = '',
  onSubmit,
  labelProps: { children, ...labelProps },
  textboxProps,
  resetSearch
}: Props) => {
  return (
    <form className={`${className}`} onSubmit={onSubmit}>
      <label className="sr-only" {...labelProps}>
        {children}
      </label>
      <div className="w-full flex border rounded-md">
        <Textbox {...textboxProps} className={textboxProps?.className} />
        {(textboxProps.value as string).length > 0 && (
          <div className="flex items-center ">
            <button
              type="button"
              onClick={resetSearch}
              className="p-2 md:p-2.5 group relative text-gray-400 hover:text-gray-600 min-w-0 flex-1 overflow-hidden bg-white text-sm font-medium text-center focus:z-10"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
        <div
          className={`${
            (textboxProps.value as string).length <= 0 && 'hover:mb-[-1px] hover:mt-[-1px] hover:h-[calc(100%+2px)]'
          }`}
        >
          <button
            type="submit"
            className={`${
              (textboxProps.value as string).length > 0 &&
              '!bg-blue-600 text-gray-100 mb-[-1px] mt-[-1px] mr-[-1px] h-[calc(100%+2px)]'
            }   p-2 md:p-2.5 hover:py-[calc(0.5rem+1px)] hover:md:py-[calc(0.625rem+1px)] text-gray-400 hover:text-gray-100 group relative min-w-0 flex-1 overflow-hidden bg-white text-sm font-medium text-center hover:bg-blue-700 focus:z-10 last:rounded-r-md`}
          >
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  )
}