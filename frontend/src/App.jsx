import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { GlobalContextProvider } from 'context'
import {
  Home,
  List,
  Login,
  Register,
  Statistic,
  NotFound 
} from 'pages'
import { RouteGuard } from 'components'

const App = () => {
  return(
    <GlobalContextProvider>
      <Router>
        <Routes>
          {/* If already login, can't access Login and Register pages */}
          <Route element={ <RouteGuard check='Login'/> }>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
          </Route>
          {/* If not login, can't access List and Statistic pages */}
          <Route element={ <RouteGuard check='NotLogin'/> }>
            <Route path='/list' element={ <List/> }/>
            <Route path='/statistic' element={ <Statistic/> }/>
          </Route>
          {/* Home and Not Found pages can be accessed anytime */}
          <Route path='/' element={ <Home/> }/>
          <Route path='*' element={ <NotFound/> }/>
        </Routes>
      </Router>
    </GlobalContextProvider>
  )
}

export default App