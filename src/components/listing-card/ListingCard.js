import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
    card: {
        borderRadius: '10px',
        display: 'block',
        textAlign: 'center'
    }
}))

const ListingCard = ({icon, title, desc}) => {
    const classes = useStyles()
  return (
    <div className={classes.card}>
        <span>{icon}</span>
        <span>{title}</span>
        <span>{desc}</span>
    </div>
  )
}

export default ListingCard