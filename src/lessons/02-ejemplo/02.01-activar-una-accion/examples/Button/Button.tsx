import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({ children, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className="button"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
