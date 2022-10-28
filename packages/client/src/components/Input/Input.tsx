import React from 'react';
import cn from 'classnames';
import styles from './input.module.scss'

import { Props } from './types';

export const Input: React.FC<Props> = ({
  required = false,
  type = 'text',
  className = ''
}: Props): JSX.Element => (

    <input
      className={cn(styles.input, className)}
      required={required}
      type={type}
    />

);
