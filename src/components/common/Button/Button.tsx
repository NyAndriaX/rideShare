import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
interface ButtonProps {
  type: ButtonType;
  text: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  className?: string;
  icon?: IconType;
}

type IconType = () => JSX.Element;

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
      className={`flex w-full p-2 rounded-sm font-medium max-h-[44px] items-center justify-center transition-all ${
        className ?? ''
      }`}
      style={{backgroundColor:'rgb(128 200 95)',color:'white'}}
      disabled={disabled}
      aria-label={text}
    >
      {icon && React.createElement(icon)}
      {text}
    </button>
  );
}
