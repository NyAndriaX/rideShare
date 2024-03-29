import React, { ReactNode } from 'react'

type ButtonType = 'submit' | 'reset' | 'button' | undefined
interface ButtonProps {
  type: ButtonType
  text: string
  onClick?: (e?: any) => void
  disabled?: boolean
  className?: string
  icon?: ReactNode
}

export default function Button({
  type,
  text,
  onClick,
  disabled,
  className,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex flex-row gap-2 w-full px-4 py-6 rounded-md max-h-[44px] items-center justify-center transition-all ${
        className ?? ''
      }`}
      disabled={disabled}
      aria-label={text}
    >
      <span>
        {icon && typeof icon !== 'string' && React.isValidElement(icon) && icon}
      </span>
      <span>{text}</span>
    </button>
  )
}
