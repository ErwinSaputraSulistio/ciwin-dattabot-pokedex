import { HexagramChart, Popup } from 'components'
import styles from './PopupPokedex.module.scss'

const PopupPokedex = ({ close, data, title = 'Pokedex Information' }) => {
  const hexagramValues = [
    { name:'HP', value: data.hp },
    { name: 'ATK', value: data.attack },
    { name: 'DEF', value: data.defense },
    { name: 'Sp. ATK', value: data.sp_attack },
    { name: 'Sp. DEF', value: data.sp_defense },
    { name: 'Speed', value: data.speed }
  ]

  return(
    <Popup close={ () => { close() } } title={ title }>
      <article className={ styles.popupPokedex }>
        <div className={ styles.popupPokedexHexagram }>
          <HexagramChart 
            detail={ hexagramValues }
            height={ 220 }
            maxValue={ 200 }
            width={ 180 }
          />
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Name </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.name }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Name (German) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.german_name }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Name (Japanese) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.japanese_name }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Generation </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.generation }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Status </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.status }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Species </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.species }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Types (number) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.type_number }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>First Type </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.type_1 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Second Type </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.type_2 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Height (meter) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.height_m }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Weight (kg) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.weight_kg }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Abilities (number) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.abilities_number }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>First Ability </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.ability_1 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Second Ability </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.ability_2 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Hidden Ability </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.ability_hidden }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Total Points </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.total_points }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>HP </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.hp }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Attack </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.attack }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Defense </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.defense }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Special Attack </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.sp_attack }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Special Defense </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.sp_defense }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Speed </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.speed }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Catch Rate </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.catch_rate }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Base Friendship </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.base_friendship }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Base Experience </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.base_experience }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Growth Rate </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.growth_rate }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Egg Types (number) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.egg_type_number }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>First Egg Type </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.egg_type_1 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Second Egg Type </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.egg_type_2 }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Egg Cycles </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.egg_cycles }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Percentage (male) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.percentage_male }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (normal) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_normal }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (fire) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_fire }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (water) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_water }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (electric) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_electric }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (grass) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_grass }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (ice) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_ice }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (fight) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_fight }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (poison) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_poison }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (ground) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_ground }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (flying) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_flying }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (psychic) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_psychic }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (bug) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_bug }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (rock) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_rock }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (ghost) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_ghost }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (dragon) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_dragon }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (dark) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_dark }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (steel) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_steel }</span>
        </div>
        <div className={ styles.popupPokedexData }>
          <span className={ styles.popupPokedexDataQuestion }>Against (fairy) </span> 
          <span className={ styles.popupPokedexDataAnswer }>{ data.against_fairy }</span>
        </div>
      </article>
    </Popup>
  )
}

export default PopupPokedex