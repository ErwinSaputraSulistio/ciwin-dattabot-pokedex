import HexagramBorder from '../HexagramBorder'
import styles from './HexagramInner.module.scss'

const HexagramInner = ({ height, width }) => {
  return(
    <>
      <HexagramBorder height={ height * 0.6 } width={ width * 0.6 }>
        <HexagramBorder height={ height * 0.25 } width={ width * 0.25 }/>
      </HexagramBorder>
      <div className={ styles.hexagramLineGroup }>
        <div 
          style={{
            backgroundColor: '#222227',
            borderRadius: '50%',
            height: width * 0.04,
            width: width * 0.04
          }}
        />
        <div className={ styles.hexagramLine } style={{ transform: 'rotate(30deg)', width: width * 1.5 }}/>
        <div className={ styles.hexagramLine } style={{ transform: 'rotate(90deg)', width: width * 1.5 }}/>
        <div className={ styles.hexagramLine } style={{ transform: 'rotate(150deg)', width: width * 1.5 }}/>
      </div>
    </>
  )
}

export default HexagramInner