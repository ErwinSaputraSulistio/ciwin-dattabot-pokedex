const coordinator = (height, width) => {
  return [
    {
      direction: 'North',
      dot: {
        alignItems: 'center',
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        justifyContent: 'center',
        marginLeft: width * 0.48,
        marginTop: -(height * 1.01),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginTop: -(width * 0.12),
        width: width * 0.25
      }
    },
    {
      direction: 'Northeast',
      dot: {
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        marginLeft: width * 0.975,
        marginTop: -(height * 0.76),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginLeft: width * 0.05,
        marginTop: -(width * 0.05),
        width: width * 0.25
      }
    },
    {
      direction: 'Southeast',
      dot: {
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        marginLeft: width * 0.975,
        marginTop: -(height * 0.27),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginLeft: width * 0.05,
        marginTop: width * 0.02,
        width: width * 0.25
      }
    },
    {
      direction: 'South',
      dot: {
        alignItems: 'center',
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        justifyContent: 'center',
        marginLeft: width * 0.48,
        marginTop: -(width * 0.03),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginTop: width * 0.12,
        width: width * 0.25
      }
    },
    {
      direction: 'Southwest',
      dot: {
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        marginLeft: -(width * 0.015),
        marginTop: -(height * 0.27),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginLeft: -(width * 0.255),
        marginTop: width * 0.02,
        textAlign: 'right',
        width: width * 0.25
      }
    },
    {
      direction: 'Northwest',
      dot: {
        backgroundColor: '#222227',
        borderRadius: '50%',
        display: 'flex',
        height: width * 0.04,
        marginLeft: -(width * 0.015),
        marginTop: -(height * 0.76),
        width: width * 0.04
      },
      text: {
        fontSize: width * 0.05,
        marginLeft: -(width * 0.255),
        marginTop: -(width * 0.05),
        textAlign: 'right',
        width: width * 0.25
      }
    }
  ]
}

export default coordinator