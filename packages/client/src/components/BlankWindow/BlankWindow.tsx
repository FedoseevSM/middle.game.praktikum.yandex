import styles from './BlankWindow.module.scss'

function BlankWindow({ children }: any) {
  return <div className={styles.app}>{children}</div>
}

export default BlankWindow
