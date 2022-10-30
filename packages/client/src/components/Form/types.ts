import { ReactNode, FormEvent } from 'react'

export type Props = {
  children: ReactNode
  actions: ReactNode[]
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}
