import { LineChart } from 'components'
import { lineColorPalette } from 'configs/colorPalette'
import styles from './StatisticType.module.scss'

const StatisticType = ({ data }) => {
  return(
    <section className={ styles.statisticTypeWrapper }>
      <span className={ styles.statisticTypeTitle }>Total Pokemons (Types)</span>
      <LineChart 
        lineColor={ lineColorPalette }
        maxValue={ 150 }
        values={ data }
      />
    </section>
  )
}

export default StatisticType