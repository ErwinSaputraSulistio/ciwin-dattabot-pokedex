import axios from 'axios'
import { Container, PopupPokedex } from 'components'
import ListTable from './ListTable'
import Loading from 'assets/Loading.gif'
import styles from './List.module.scss'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import useGlobalContext from 'hooks/useGlobalContext'

const List = () => {
  const { 
    userData,
    pokedex, setPokedex,
    isLoadingPokedex, setIsLoadingPokedex,
    isAllPokedexLoaded, setIsAllPokedexLoaded,
    pokedexPagination, setPokedexPagination
  } = useGlobalContext()
  const [selectedPokedex, setSelectedPokedex] = useState(null)
  const [popupPokedex, setPopupPokedex] = useState(false)

  const getPokedexData = async() => {
    try {
      setIsLoadingPokedex(true)
      const limit = 50
      const pokedexAPI = await axios.get(
        `http://localhost:8000/pokedex?from=${pokedexPagination}&limit=${limit}`,
        { headers: { Authorization: `Bearer ${userData.token}` } }
      )
      // setTimeout for more smooth infinite scroll animations
      setTimeout(() => {
        if(pokedexAPI) {
          const pokedexResult = pokedexAPI.data.data
          if(pokedexResult.length > 0) { setPokedex([...pokedex, ...pokedexResult]) }
          else { setIsAllPokedexLoaded(true) }
          setPokedexPagination(pokedexPagination + limit)
          setIsLoadingPokedex(false)
        }
      }, 500)
    }
    catch(err) { 
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: err.response.data.message
      })
    }
  }
  const openPopupPokedex = (pokemon) => {
    setSelectedPokedex(pokemon)
    setPopupPokedex(true)
  }
  
  useEffect(() => {
    if(pokedex.length === 0) {
      getPokedexData()
    }
  }, [])

  const loadMorePokedex = () => {
    if(
      (window.innerHeight + Math.round(window.scrollY)) >= (document.body.scrollHeight - 10)
      &&
      !isLoadingPokedex
      &&
      !isAllPokedexLoaded
    ) {
      getPokedexData()
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', loadMorePokedex)
    return () => {
      window.removeEventListener('scroll', loadMorePokedex)
    }
  }, [isLoadingPokedex])

  return(
    <Container>
      <main className={ styles.list }>
        {
          (popupPokedex && selectedPokedex) &&
          <PopupPokedex 
            close={ () => { setPopupPokedex(false) } }
            data={ selectedPokedex }
          />
        }
        <ListTable pokedex={ pokedex } open={ (pokemon) => { openPopupPokedex(pokemon) } }/>
        <div className={ styles.listLoader }>
          <img 
            alt='loading' 
            className={ styles.listLoaderImage } 
            src={ Loading }
            style={ !isLoadingPokedex ? { visibility: 'hidden' } : null }
          />
        </div>
      </main>
    </Container>
  )
}

export default List