import styles from './Authentication.module.scss'

const Authentication = ({ children }) => {
  return(
    <main className={ styles.authentication }>
      <aside className={ styles.authenticationLeft }>
        <div className={ styles.authenticationLeftCover }>
          <span className={ styles.authenticationLeftCoverTitle }>Ciwin's Pokedex</span>
          <span className={ styles.authenticationLeftCoverDescription }>
            The most trusted Pokemon Information source
          </span>
        </div>
      </aside>
      <section className={ styles.authenticationRight }>{ children }</section>
    </main>
  )
}

export default Authentication