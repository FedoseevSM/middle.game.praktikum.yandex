import React from 'react'

import { Props } from './types'

export const Button: React.FC<Props> = ({
  children,
  type,
  className,
}: Props): JSX.Element => (
  <button className={className} type={type}>
    {children}
  </button>
)
