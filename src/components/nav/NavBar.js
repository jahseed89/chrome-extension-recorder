import React from 'react'
import { navLogo } from '../../assets/index'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom'
import { EXTENTION_ROUTE } from '../../content-management/Landing'

const useStyles = createUseStyles((theme) => ({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.color.primaryColor,
        padding: '10px 2rem',
        fontFamily: theme.font.interFont
    },
    img: {
        width: '100px'
    },
    features: {
        display: 'flex',
        gap: '1rem',
        fontSize: theme.smallerTitleSize,
        fontWeight: theme.fontWidth.largWidth
    },
    getStarted: {
        fontSize: theme.smallerTitleSize,
        fontWeight: theme.fontWidth.largWidth

    }
}))


const NavBar = () => {
    const classes = useStyles()

    const navigator = useNavigate()

    const toExtention = () => {
        navigator(`/${EXTENTION_ROUTE}`)
    }
  return (
    <div className={classes.nav}>
        <img src={navLogo} alt='navLogo' className={classes.img} />
        <p className={classes.features}>
            <span>Features</span>
            <span>How it works</span>
        </p>
        <p className={classes.getStarted} onClick={toExtention}>Get Started</p>
    </div>
  )
}

export default NavBar