import { Link } from 'react-router-dom'
import styles from './NavbarNavigation.module.scss'

const navigations = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/list',
    name: 'List'
  },
  {
    path: '/statistic',
    name: 'Statistic'
  }
]

const NavbarNavigation = () => {
  return(
    <div className={ styles.navbarNavigation }>
      {
        navigations.map((item, index) => (
          <Link 
            className={ styles.navbarNavigationButton } 
            to={ item.path } 
            key={ index }
          >
            { item.name }
          </Link>
        ))
      }
    </div>
  )
}

export default NavbarNavigation