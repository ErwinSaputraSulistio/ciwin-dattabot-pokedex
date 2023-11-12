import { BarChart } from 'components'
import { barColorPalette } from 'configs/colorPalette'
import styles from './StatisticGeneration.module.scss'

const StatisticGeneration = ({ data }) => {
  return(
    <section className={ styles.statisticGenerationWrapper }>
      <span className={ styles.statisticGenerationTitle }>Total Pokemons (Generations)</span>
      <BarChart 
        barColor={ barColorPalette }
        maxValue={ 200 } 
        values={ data }
      />
    </section>
  )
}

export default StatisticGeneration