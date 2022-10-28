import { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<any>) => void
  onBlur?: (e: React.FocusEvent<any, Element>) => void
  className?: string
  inputClassName?: string
  showError?: boolean
  error?: string | undefined
}
