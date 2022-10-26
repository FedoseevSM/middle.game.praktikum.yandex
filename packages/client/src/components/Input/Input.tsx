import React from 'react';
import cn from 'classnames';

import { Props } from './types';

export const Input: React.FC<Props> = ({

  required = false,
  type = 'text',
  className = ''
}: Props): JSX.Element => (

    <input
      className={className}
      required={required}
      type={type}
    />

);
