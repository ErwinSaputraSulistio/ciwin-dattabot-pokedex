import { Authentication, Button, Input, Logo } from 'components'
import axios from 'axios'
import styles from './Login.module.scss'
import Swal from 'sweetalert2'
import useGlobalContext from 'hooks/useGlobalContext'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Login = () => {
  const { setUserData } = useGlobalContext()
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const postLogin = async(e) => {
    try {
      e.preventDefault()
      const loginData = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }
      const result = await axios.post('http://localhost:8000/user/login', loginData)
      if(result) { 
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: result.data.message
        })
        .then(() => {
          setUserData(result.data.data)
          localStorage.setItem('user', JSON.stringify(result.data.data))
          navigate('/statistic')
        })
      }
    }
    catch(err) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: err.response.data.message
      })
    }
  }

  return(
    <Authentication>
      <form className={ styles.login } onSubmit={ postLogin }>
        <Logo grayscale={ true } height={ 75 } width={ 225 }/>
        <div className={ styles.loginInputs }>
          <Input 
            name='Username' 
            placeholder='Input username?' 
            ref={ usernameRef } 
            type='text'
          />
          <Input 
            name='Password'
            placeholder='Input password?' 
            ref={ passwordRef } 
            type='password'
          />
        </div>
        <Button
          mode='dark'
          name='Login'
          width='100%'
        />
        <div className={ styles.registerNavigation }>
          Don't have an account yet?
          <span 
            className={ styles.registerButton } 
            onClick={ () => { navigate('/register') } }
          >
            Register
          </span>
        </div>
      </form>
    </Authentication>
  )
}

export default Login