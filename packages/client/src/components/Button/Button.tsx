import React from 'react'
import cn from 'classnames'
import { Props } from './types'
import styles from './button.module.scss'

export const Button: React.FC<Props> = ({
  children,
  type = 'button',
  className = '',
  onClick,
}: Props): JSX.Element => (
  <button
    className={cn(styles.button, styles[className])}
    onClick={onClick}
    type={type}>
    {children}
  </button>
)
