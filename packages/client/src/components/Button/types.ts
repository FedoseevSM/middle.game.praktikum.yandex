import { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
