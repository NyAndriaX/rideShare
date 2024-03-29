import React, { forwardRef } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  className?: string
  ariaInvalid?: boolean
  type: string
  error?: string
  value?: string
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
    disabled,
    autocomplete,
    autofocus,
    inputClassName,
    ...props
  },
  ref,
) => {
  return (
    <div className='flex flex-col relative'>
      <label className='text-black text-sm mb-1'>{label}</label>
      <div className='flex items-center gep-4'>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...props}
          className={`z-1 px-4 p-3  w-full bg-offWhite rounded-md ${error && 'border-red-500'} ${inputClassName} ${className}`}
          value={value}
          disabled={disabled}
          autoFocus={autofocus}
          autoComplete={autocomplete}
        />
      </div>
      {error && (
        <p role='alert' className='text-sm text-red-500 font-semibold'>
          {error}
        </p>
      )}
    </div>
  )
}

export default forwardRef(Input)
