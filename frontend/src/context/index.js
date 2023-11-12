import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [pokedex, setPokedex] = useState([])
  const [isLoadingPokedex, setIsLoadingPokedex] = useState(false)
  const [isAllPokedexLoaded, setIsAllPokedexLoaded] = useState(false)
  const [pokedexPagination, setPokedexPagination] = useState(0)
  const [pokedexStatistic, setPokedexStatistic] = useState({
    generations: [],
    types: [],
    topFive: []
  })

  useEffect(() => {
    const userDataLocalStorage = JSON.parse(localStorage.getItem('user'))
    if(userDataLocalStorage) { setUserData(userDataLocalStorage) }
  }, [])

  return(
    <GlobalContext.Provider
      value={{
        userData, setUserData,
        pokedex, setPokedex,
        isLoadingPokedex, setIsLoadingPokedex,
        isAllPokedexLoaded, setIsAllPokedexLoaded,
        pokedexPagination, setPokedexPagination,
        pokedexStatistic, setPokedexStatistic
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}