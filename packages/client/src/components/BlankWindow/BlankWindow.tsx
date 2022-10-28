import styles from './BlankWindow.module.scss';
import cn from 'classnames';
import { Props } from './types';

export const BlankWindow: React.FC<Props> = ({
  children,
  className
}: Props): JSX.Element => (
  <div className={cn(styles.app, className)}>
    {children}
  </div>
);

