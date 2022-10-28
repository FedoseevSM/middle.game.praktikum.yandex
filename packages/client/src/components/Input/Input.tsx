import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'
import { Props } from './types'

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  showError = false,
  error,
  className,
  ...props
}: Props): JSX.Element => (
  <div>
    <input
      name={name}
      type={type}
      className={cn(className, styles.input, showError && styles.input_error)}
      {...props}
    />
    {showError && <p className={styles.error}>{error}</p>}
  </div>
)
