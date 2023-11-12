import { Navigate, Outlet, useLocation } from 'react-router-dom'
// Hooks
import useGlobalContext from 'hooks/useGlobalContext'

const AuthGuard = ({ check }) => {
  const { userData } = useGlobalContext()
  const location = useLocation()

  return(
    check === 'Login' ?
    (
      userData ?
      <Navigate to='/statistic' state={{ from: location }} replace/>
      :
      <Outlet/>
    )
    :
    check === 'NotLogin' ?
    (
      userData ?
      <Outlet/>
      :
      <Navigate to='/login' state={{ from: location }} replace/>
    )
    :
    null
  )
}

export default AuthGuard