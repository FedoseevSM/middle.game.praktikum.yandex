import { useEffect } from 'react'
import styles from './App.module.scss'
import LoginPage from './pages/LoginPage'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        Вот тут будет жить ваше приложение :)
        <LoginPage/>
      </div>
    </div>
  )
}

export default App
