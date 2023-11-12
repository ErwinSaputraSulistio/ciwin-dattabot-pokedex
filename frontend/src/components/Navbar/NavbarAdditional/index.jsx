import { Button } from 'components'
import styles from './NavbarAdditional.module.scss'
import useGlobalContext from 'hooks/useGlobalContext'
import { useNavigate } from 'react-router-dom'

const NavbarAdditional = () => {
  const { userData, setUserData } = useGlobalContext()
  const navigate = useNavigate()

  const logout = () => {
    setUserData(null)
    localStorage.clear()
    navigate('/login')
  }

  return(
    <div className={ styles.navbarAdditional }>
      {
        userData ?
        <div className={ styles.navbarAdditionalUser }>
          <span className={ styles.navbarAdditionalWelcome }>
            Welcome, <b>Dr. { userData.nickname }</b>
          </span>
          <Button 
            click={ () => { logout() } }
            mode='dark'
            name='Logout'
          />
        </div>
        :
        <>
          <Button
            click={ () => { navigate('/login') } }
            margin='0.25em 0.5em'
            mode='dark'
            name='Login'
          />
          <Button
            click={ () => { navigate('/register') } }
            margin='0.25em 0.5em'
            mode='light'
            name='Register'
          />
        </>
      }
    </div>
  )
}

export default NavbarAdditional