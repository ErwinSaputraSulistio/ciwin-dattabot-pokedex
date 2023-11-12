import styles from './ListTable.module.scss'
import { useMemo } from 'react'

const ListTable = ({ pokedex, open }) => {
  const pokedexMemo = useMemo(() => pokedex.map((pokemon, index) => (
    <tr 
      className={ styles.tableRow }
      key={`pokemon-table-row-${index}`}
      onClick={ () => open(pokemon) }
    >
      <td className={ styles.tableFirstColumn }>{ pokemon.pokedex_number }</td>
      <td className={ styles.tableSecondColumn }>{ pokemon.name }</td>
      <td className={ styles.tableThirdColumn }>{ pokemon.species }</td>
    </tr>
  )), [pokedex])

  return(
    <div className={ styles.listTable }>
      <table>
        <thead>
          <tr>
            <th className={ styles.tableFirstColumn }>Number</th>
            <th className={ styles.tableSecondColumn }>Name</th>
            <th className={ styles.tableThirdColumn }>Species</th>
          </tr>
        </thead>
        <tbody>
        { pokedexMemo }
        </tbody>
      </table>
    </div>
  )
}

export default ListTable