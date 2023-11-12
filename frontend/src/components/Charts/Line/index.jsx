import styles from './Line.module.scss'

const LineChart = ({ 
  color = '#222227', 
  height = 300,
  lineColor = [],
  maxValue = 0,
  values = [],
  width = 250 
}) => {
  return(
    <div className={ styles.line } style={{ fontSize: width * 0.03, height, width }}>
      <div className={ styles.lineChart }>
        {
          values.map((data, index) => (
            <div className={ styles.lineData } key={ `line-chart-bar-${ index }` }>
              <span className={ styles.lineDataName }>{ data._id }</span>
              <div className={ styles.lineDataBar } style={{
                backgroundColor: lineColor[index] || color,
                height: height * 0.01,
                width: `${ data.count / maxValue * 90 }%`
              }}/>
            </div>
          ))
        }
      </div>
      <div style={{
        borderTop: `1px solid ${ color }`,
        marginTop: height,
        position: 'absolute',
        width: width
      }}>
        <div className={ styles.lineMaxValues }>
          <span>{ maxValue * 0.2 }</span>
          <span>{ maxValue * 0.4 }</span>
          <span>{ maxValue * 0.6 }</span>
          <span>{ maxValue * 0.8 }</span>
          <span>{ maxValue }</span>
        </div>
      </div>
    </div>
  )
}

export default LineChart