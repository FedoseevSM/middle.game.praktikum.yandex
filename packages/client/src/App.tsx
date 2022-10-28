import { useEffect } from 'react'
import BackgroundLayout from './layouts/BackgroundLayout'

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
    <BackgroundLayout>
      <div>Вот тут будет жить ваше приложение :)</div>
    </BackgroundLayout>
  )
}

export default App
