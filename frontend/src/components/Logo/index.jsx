import LogoImage from 'assets/LogoImage.png'
import styles from './Logo.module.scss'

const Logo = ({ grayscale = false, height = 50, width = 150 }) => {
  return(
    <img 
      alt='logo-image' 
      className={ grayscale && styles.logo } 
      src={ LogoImage }
      style={{ height, width }}
    />
  )
}

export default Logo