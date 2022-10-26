import EmptyLayout from '../../layouts/EmptyLayout'
import styles from './404.module.scss'

const props = {
    title: "Страница не найдена",
    description: "404"
}

function ErrorPage404() {
  return (
    <EmptyLayout>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </EmptyLayout>
  )
}

export default ErrorPage404
