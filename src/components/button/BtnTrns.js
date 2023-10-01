import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
    btn: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #302d4a',
        padding: '5px 10px',
        borderRadius: '5px'

    }
}))

const BtnTrns = ({icon, txt}) => {
    const classes = useStyles()
  return (
    <button className={classes.btn}>
        <span>{icon}</span>
        <span>{txt}</span>
    </button>
  )
}

export default BtnTrns