import { Link } from 'react-router-dom'

import {BlankWindow} from '../../components/BlankWindow'
import styles from './EmptyLayout.module.scss'

function EmptyLayout({ children }: any) {
  return (
    <div className={styles.wrapped}>
      <BlankWindow>
        <div className={styles.inner}>
        {children}
        <Link to="/">
          перейти на главную
        </Link>
        </div>
      </BlankWindow>
    </div>
  )
}

export default EmptyLayout
