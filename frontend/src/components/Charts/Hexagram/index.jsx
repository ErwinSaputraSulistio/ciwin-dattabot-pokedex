import { useEffect, useState } from 'react'
import HexagramBorder from './HexagramBorder'
import HexagramInner from './HexagramInner'

const HexagramChart = ({ detail, height, maxValue, width }) => {
  const [polygonValue, setPolygonValue] = useState('polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)')
  
  const setHexagramChart = () => {
    if(detail.length === 6) {
      const north = `50% ${ 50 - (((detail[0].value / maxValue) * 10) * 5) }%`
      const northEast = `${ 50 + (((detail[1].value / maxValue) * 10) * 5) }% ${ 50 - ((detail[1].value / maxValue) * 10) * 2.5 }%`
      const southEast = `${ 50 + (((detail[2].value / maxValue) * 10) * 5) }% ${ 50 + (((detail[2].value / maxValue) * 10) * 2.5) }%`
      const south = `50% ${ 50 + (((detail[3].value / maxValue) * 10) * 5) }%`
      const southWest = `${ 50 - (((detail[4].value / maxValue) * 10) * 5) }% ${ 50 + (((detail[4].value / maxValue) * 10) * 2.5) }%`
      const northWest = `${ 50 - (((detail[5].value / maxValue) * 10) * 5) }% ${ 50 - ((detail[5].value / maxValue) * 10) * 2.5 }%`
      
      setPolygonValue(`polygon(${ northWest }, ${ north }, ${ northEast }, ${ southEast }, ${ south }, ${ southWest })`)
    }
  }
  
  useEffect(() => {
    setHexagramChart()
  }, [])

  return(
    <HexagramBorder border='bold' detail={ detail } height={ height } width={ width }>
      <HexagramInner height={ height } width={ width }/>
      <div
        style={{
          backgroundColor: '#222227',
          // nw1-2pm, n4m, ne5-6mp, se7-8pp, s10m, sw11-12pm
          // empty: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)
          // full: polygon(0% 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)
          clipPath: polygonValue,
          height: height,
          position: 'absolute',
          transition: 'clip-path 0.5s',
          width: width
        }}
      />
    </HexagramBorder>
  )
}

export default HexagramChart