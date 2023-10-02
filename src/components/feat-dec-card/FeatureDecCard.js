import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
    cardHolder: {
        display: 'flex',
        gap: '10px'
    },
    img: {
        width: '40px',
        height: '40px',
        marginTop: '1.5rem'
    },
    title: {
        fontSize: theme.fontSize.smallerTitleSize,
        color: theme.color.lightBlue,
        fontWeight: theme.fontWidth.middleWidth,
        lineHeight: theme.lineHeight.smallerTitleHeight
    },
    desc: {
        fontSize: theme.fontSize.textSize,
        lineHeight: theme.lineHeight.textHeight,
        color: '#878789'
    },

    '@media (max-width: 768px)': {
        cardHolder: {
          flexDirection: 'column',
          alignItems: 'center', 
          gap: '0',
        },
        img: {
          marginTop: '0',
        },
        title: {
          fontSize: theme.fontSize.titleSizeMobile,
        },
        desCont: {
          textAlign: 'center',
          color: 'red'
        }
      },

}))

const FeatureDecCard = ({imgDes, title, desc}) => {
    const classes = useStyles()
  return (
    <div className={classes.cardHolder}>
        <img src={imgDes} alt='icon' className={classes.img} />
        <div className={classes.desCont}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.desc}>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureDecCard