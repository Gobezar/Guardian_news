import React from 'react'
import cl from './Button.module.scss'

type ButtonTheme = 'primary' | 'secondary' | 'categories'

type Props = {
  link?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  theme?: ButtonTheme
  size?: 'm' | 's'
  type?: 'submit'
  disabled?: boolean
}

function Button({ onClick, children, disabled, type }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={cl.Button}
      >
        {children}
      </button>
    </>
  )
}

export default Button
