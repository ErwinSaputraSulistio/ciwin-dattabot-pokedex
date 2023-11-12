import axios from 'axios'
import { Container } from 'components'
import styles from './Statistic.module.scss'
import StatisticGeneration from './StatisticGeneration'
import StatisticType from './StatisticType'
import TopFive from './TopFive'
import { useEffect } from 'react'
import useGlobalContext from 'hooks/useGlobalContext'

const Statistic = () => {
  const { 
    userData, 
    pokedexStatistic, setPokedexStatistic 
  } = useGlobalContext()
  
  const getStatisticData = async() => {
    try {
      const statisticResult = await axios.get(
        'http://localhost:8000/pokedex/statistic', 
        { headers: { Authorization: `Bearer ${userData.token}` } }
      )
      if(statisticResult) { setPokedexStatistic(statisticResult.data.data) }
    }
    catch(err) { alert(err.response.data.message) }
  }

  useEffect(() => {
    if(
      pokedexStatistic.generations.length === 0 &&
      pokedexStatistic.types.length === 0 &&
      pokedexStatistic.topFive.length === 0
    ) {
      getStatisticData()
    }
  }, [])

  return(
    <Container>
      <main className={ styles.statistic }>
        <TopFive data={ pokedexStatistic.topFive }/>
        <StatisticType data={ pokedexStatistic.types }/>
        <StatisticGeneration data={ pokedexStatistic.generations }/>
      </main>
    </Container>
  )
}

export default Statistic