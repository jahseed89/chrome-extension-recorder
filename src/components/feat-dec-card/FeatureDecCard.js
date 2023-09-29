import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
    cardHolder: {
        display: 'flex',
    },

    title: {
        fontSize: theme.fontSize.smallerTitleSize,
        color: theme.color.lightBlue,
        fontWeight: theme.fontWeight.middleWidth,
        lineHeight: theme.lineHeight.smallerTitleHeight
    },
    desc: {
        fontSize: theme.fontSize.textSize,
        lineHeight: theme.lineHeight.textHeight
    }

}))

const FeatureDecCard = ({imgDes, title, desc}) => {
    const classes = useStyles()
  return (
    <div className={classes.cardHolder}>
        <img src={imgDes} alt='icon' />
        <div className={classes.desCont}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.desc}>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureDecCard