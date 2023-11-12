import { useMemo } from 'react'
import coordinator from './coordinator'
import styles from './HexagramBorder.module.scss'

const HexagramBorder = ({ 
  detail = [],
  children,
  height, 
  width
}) => {
  // Coordinates for detail positions (North, South, etc)
  const coordinates = coordinator(height, width)
  // useMemo to prevent repetitive maps until the detail is updated
  const detailMapMemo = useMemo(() => coordinates.map((coordinate, index) => (
    <div className={ styles.hexagramDetail } key={`hexagram-${index}`}>
      { detail.length === 6 &&
        <div style={ coordinate.dot }>
          <span style={ coordinate.text }>{ detail[index]?.name }</span>
        </div>
      }
    </div>
  )), [detail])
  
  return(
    <div style={{ height, width }}>
      <div className={ styles.hexagramBorder }>
        <div className={ styles.hexagram }>
          { children }
        </div>
      </div>
      { detailMapMemo }
    </div>
  )
}

export default HexagramBorder