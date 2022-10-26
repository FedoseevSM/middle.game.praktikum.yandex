import EmptyLayout from '../../layouts/EmptyLayout'
import styles from './500.module.scss'

const props = {
    title: "Нет соединения",
    description: "500"
}

function ErrorPage500() {
  return (
    <EmptyLayout>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </EmptyLayout>
  )
}

export default ErrorPage500
