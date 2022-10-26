import React from 'react';

import { Props } from './types';

export const Button: React.FC<Props> = ({
  children,
  className,
}: Props): JSX.Element => (
  <button className={className} >
    {children}
  </button>
);
