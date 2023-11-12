import { Container } from 'components'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return(
    <Container>
      <main className={ styles.notFound }>
        Not Found
      </main>
    </Container>
  )
}

export default NotFound