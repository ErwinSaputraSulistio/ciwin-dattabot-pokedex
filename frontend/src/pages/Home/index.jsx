import { Button, Container } from 'components'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../../assets/VideoBackground.mp4'

const Home = () => {
  const navigate = useNavigate()

  return(
    <Container>
      <main className={ styles.home }>
        <video className={ styles.homeBackground } autoPlay loop muted>
          <source src={ VideoBackground } type='video/mp4'/>
        </video>
        <div className={ styles.homeBackgroundLayer }>
          <span className={ styles.homeTitle }>Your Journey Starts Here</span>
          <span className={ styles.homeDescription }>Discover a lot of new pokemons now. Are you ready?</span>
          <Button 
            customClass={ styles.homeButton } 
            click={ () => { navigate('/list') } } 
            name='Discover Now'
          />
        </div>
      </main>
    </Container>
  )
}

export default Home