import BlankWindow from '../../components/BlankWindow'
import styles from './EmptyLayout.module.scss'

function EmptyLayout({children}: any) {
  return (
  <div className={styles.app}>
    <BlankWindow>
      {children}
    </BlankWindow>
  </div>
  )
}

export default EmptyLayout
