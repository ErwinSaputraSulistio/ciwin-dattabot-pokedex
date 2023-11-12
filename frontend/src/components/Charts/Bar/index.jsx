import styles from './Bar.module.scss'

const BarChart = ({ 
  barColor = [],
  color = '#222227', 
  height = 150,
  maxValue = 0,
  values = [],
  width = 300 
}) => {
  return(
    <div className={ styles.bar } style={{ fontSize: width * 0.03, height, width }}>
      <div className={ styles.barValues }>
        <span>{ maxValue }</span>
        <span>{ maxValue * 0.8 }</span>
        <span>{ maxValue * 0.6 }</span>
        <span>{ maxValue * 0.4 }</span>
        <span>{ maxValue * 0.2 }</span>
      </div>
      <div className={ styles.barStickGroup }>
        {
          values.map((data, index) => (
            <div 
              className={ styles.barStick } 
              key={`bar-stick-${index}`}
              style={{
                backgroundColor: barColor[index] || color,
                borderRadius: `0.25em 0.25em 0 0`,
                height: `${ (data.count / maxValue) * 90 }%`,
                width: width * 0.05
              }}
            >
              <span className={ styles.barStickName }>
                { data._id }
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BarChart