'use client'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  useId,
  useState,
} from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Textbox } from '@/components/atoms/TextBox'
import { Label } from '@/components/ui/label'

type Props = {
  className?: string
  titleLevel?: 3 | 4 | 5 | 6
  labelProps: Omit<ComponentPropsWithoutRef<'label'>, 'htmlFor' | 'className'>
  textboxProps: Omit<ComponentPropsWithRef<'input'>, 'id'>
  description?: string
  error?: string
  isRequired?: boolean
  onClick?: () => void
}

export function TextBoxWithLabel({
  className = '',
  titleLevel = 3,
  labelProps: { children, ...labelProps },
  textboxProps,
  description,
  error,
  isRequired = false,
}: Props) {
  const descriptionId = useId()
  const errorMessageId = useId()
  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  return (
    <div className={`${className}`}>
      <Label
        role="heading"
        aria-level={titleLevel}
        htmlFor={textboxProps.name}
        className={`block text-sm font-semibold leading-6 text-gray-900 ${
          isRequired ? 'required' : ''
        }`}
      >
        {children}
      </Label>
      <div className="relative mt-1 flex">
        <Textbox
          {...textboxProps}
          id={textboxProps.name}
          aria-describedby={descriptionId}
          aria-invalid={!!error}
          aria-errormessage={errorMessageId}
          type={`${
            textboxProps.type === 'password'
              ? showPassWord
                ? 'text'
                : 'password'
              : textboxProps.type
          }`}
        />
        {textboxProps.type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6  select-none"
            onClick={() => setShowPassWord(!showPassWord)}
          >
            {showPassWord ? (
              <EyeSlashIcon className=" text-gray-400 " />
            ) : (
              <EyeIcon className=" text-gray-400 " />
            )}
          </button>
        )}
      </div>

      <div className="">
        {description && (
          <p id={descriptionId} className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        )}
        {error && (
          <p id={errorMessageId} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
