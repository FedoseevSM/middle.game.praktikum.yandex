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
<<<<<<< HEAD
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        Вот тут будет жить ваше приложение :)
      </div>
    </div>
  )
=======
  return <div className={styles.app}>Вот тут будет жить ваше приложение :)<LoginPage/></div>
>>>>>>> added the layout of the login page
}

export default App
