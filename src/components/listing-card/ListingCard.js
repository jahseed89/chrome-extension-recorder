import React from 'react'
import { createUseStyles } from 'react-jss'
import { rec } from '../../assets/index'

const useStyles = createUseStyles((theme) => ({
    card: {
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem'

    },
    num: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: theme.color.primaryColor,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: theme.color.secondryColor,
      fontSize: '22px',
      margin: '.8rem 0'
    },
    desc: {
      color: theme.color.grey,
      fontSize: '16px'
    },

    '@media (max-width: 768px)': {
      num: {
        width: '40px',
        height: '40px',
        fontSize: '18px',
      },
      title: {
        fontSize: '18px',
      },
      desc: {
        fontSize: '14px',
      },
    },
}))

const ListingCard = ({num, title, desc}) => {
    const classes = useStyles()
  return (
    <div className={classes.card}>
        <span className={classes.num}>{num}</span>
        <span className={classes.title}>{title}</span>
        <span className={classes.desc}>{desc}</span>
        <img src={rec} alt='rec' />
    </div>
  )
}

export default ListingCard