import { useEffect } from 'react'
import styles from './App.module.scss'
import LoginPage from './pages/Login/LoginPage'

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
  return <div className={styles.app}>Вот тут будет жить ваше приложение :)<LoginPage/></div>
}

export default App
