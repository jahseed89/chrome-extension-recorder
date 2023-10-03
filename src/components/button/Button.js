import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
    btn: {
        backgroundColor: theme.color.primaryColor,
        color: '#fff',
        padding: '22px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '8px',
        border: 'none',
    },

    '@media (max-width: 768px)': {
      btn: {
        padding: '16px 20px', 
        fontSize: '14px',
      },
    },
}))

const Button = ({btnText, icon}) => {
    const classes = useStyles()
    
  return (
    <button className={classes.btn}><span>{btnText}</span> <span>{icon}</span> </button>
  )
}

export default Button