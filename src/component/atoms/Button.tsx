import React from 'react'
import { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'second '
  action: string
  displays?: 'true' | 'false'
}

export const Button = ({
  action,
  variant = 'primary',
}: ButtonProps) => {
  const variants = {
    primary:"bg-morning px-3 py-2",
    second:"bg-transparent px-3 py-2"
  }[variant]

  return (
    <button
      className={classNames(
        'flex items-center justify-center rounded-xl  mobile:w-full border-2 border-solid border-action transition-all',
        variants,
      )}
    >
      <span className={classNames('text-[16px] px-2 ')}>{action}</span>
    </button>
  )
}
