import styles from './Container.module.scss'
import { Navbar } from 'components'

const Container = ({ children }) => {
  return(
    <div className={ styles.container }>
      <Navbar/>
      <main className={ styles.containerPage }>
        { children }
      </main>
    </div>
  )
}

export default Container