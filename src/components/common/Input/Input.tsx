import React, { forwardRef, ReactNode } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  className?: string
  ariaInvalid?: boolean
  type: string
  error?: string
  value?: string
  icon?: ReactNode
  disabled?: boolean
  autocomplete?: string
  autofocus?: boolean
  inputClassName?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  {
    label,
    placeholder,
    className,
    type,
    ariaInvalid,
    error,
    value,
    icon,
    disabled,
    autocomplete,
    autofocus,
    inputClassName,
    ...props
  },
  ref,
) => {
  return (
    <div className='flex flex-col w-full relative gap-1'>
      <label className='text-blue-900 font-semibold text-base mb-1'>
        {label}
      </label>
      <div className='flex items-center gep-4'>
        <div className='flex flex-row items-center w-full'>
          <span className='absolute ml-4'>
            {icon &&
              typeof icon !== 'string' &&
              React.isValidElement(icon) &&
              icon}
          </span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className={`z-1 px-4 p-3 text-lg focus:border-blue-900 w-full bg-gray-50 border border-gray-200 text-blue-900 rounded-md ${icon && 'pl-12'} ${error && 'border border-red-500'} ${inputClassName} ${className}`}
            value={value}
            disabled={disabled}
            autoFocus={autofocus}
            autoComplete={autocomplete}
          />
        </div>
      </div>
      {error && (
        <p role='alert' className='text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  )
}

export default forwardRef(Input)
