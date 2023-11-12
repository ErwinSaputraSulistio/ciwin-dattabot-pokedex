import { Logo } from 'components'
import styles from './NavbarAside.module.scss'

const NavbarAside = ({ isHamburgerClicked, setIsHamburgerClicked }) => {
  const navbarHamburgerClassName = `${ styles.navbarHamburger } 
  ${ (isHamburgerClicked) && styles.navbarHamburgerActive }`

  return(
    <aside className={ styles.navbarAside }>
      <Logo grayscale={ true } height='2em' width='6em'/>
      <div 
        className={ navbarHamburgerClassName }
        onClick={ () => { setIsHamburgerClicked(!isHamburgerClicked) } }
      >
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
      </div>
    </aside>
  )
}

export default NavbarAside