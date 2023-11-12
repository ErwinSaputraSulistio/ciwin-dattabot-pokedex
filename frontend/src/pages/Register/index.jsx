import { Authentication, Button, Input, Logo } from 'components'
import axios from 'axios'
import styles from './Register.module.scss'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const nicknameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const postRegister = async(e) => {
    try {
      e.preventDefault()
      const registerData = {
        nickname: nicknameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }
      const result = await axios.post('http://localhost:8000/user/register', registerData)
      if(result) { 
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: result.data.message
        })
        .then(() => { navigate('/login') })
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
      <form className={ styles.register } onSubmit={ postRegister }>
        <Logo grayscale={ true } height={ 75 } width={ 225 }/>
        <div className={ styles.registerInputs }>
          <Input 
            name='Nickname' 
            placeholder='New nickname?' 
            ref={ nicknameRef } 
            type='text'
          />
          <Input 
            name='Username' 
            placeholder='New username?' 
            ref={ usernameRef } 
            type='text'
          />
          <Input 
            name='Password'
            placeholder='New password?' 
            ref={ passwordRef } 
            type='password'
          />
        </div>
        <Button
          mode='dark'
          name='Register'
          width='100%'
        />
        <div className={ styles.loginNavigation }>
          Already have an account?
          <span 
            className={ styles.loginButton } 
            onClick={ () => { navigate('/login') } }
          >
            Login
          </span>
        </div>
      </form>
    </Authentication>
  )
}

export default Register