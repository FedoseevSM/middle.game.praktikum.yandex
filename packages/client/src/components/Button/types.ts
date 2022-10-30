import { ButtonHTMLAttributes } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  className?: string
  color?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  children: React.ReactNode
}
