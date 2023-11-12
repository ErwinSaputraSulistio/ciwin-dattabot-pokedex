import { PopupPokedex } from 'components'
import styles from './TopFive.module.scss'
import { useState } from 'react'

const TopFive = ({ data }) => {
  const [popupPokedex, setPopupPokedex] = useState(false)
  const [selectedPokedex, setSelectedPokedex] = useState(null)

  const openPopupPokedex = (pokemon) => {
    setSelectedPokedex(pokemon)
    setPopupPokedex(true)
  }

  return(
    <>
      <section className={ styles.topFiveWrapper }>
        <span className={ styles.topFiveTitle }>Top Five Pokemons (Total Points)</span>
        { 
          data.map((pokemon, index) => (
            <span 
              className={ styles.topFiveCard }
              key={`top-five-card-${ index }`}
              onClick={ () => { openPopupPokedex(pokemon) } }
            >
                { `${ index + 1 }.) ${ pokemon.name }` }
              </span>
          ))
        }
      </section>
      {
        (popupPokedex && selectedPokedex) &&
        <PopupPokedex 
          close={ () => { setPopupPokedex(false) } }
          data={ selectedPokedex }
        />
      }
    </>
  )
}

export default TopFive