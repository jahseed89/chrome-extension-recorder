import React from 'react'
import { navLogo } from '../../assets/index'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom';
import { RECORDER_ROUTE } from '../../content-management/Landing';

const useStyles = createUseStyles((theme) => ({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.color.primaryColor,
        padding: '10px 0',
        fontFamily: theme.font.interFont
    },
    img: {
        width: '100px'
    },
    features: {
        display: 'flex',
        gap: '1rem',
        fontSize: theme.smallerTitleSize,
        fontWeight: theme.fontWidth.largWidth,
        cursor: 'pointer'
    },
    getStarted: {
        fontSize: theme.smallerTitleSize,
        fontWeight: theme.fontWidth.largWidth,
        cursor: 'pointer'

    },
    '@media (max-width: 768px)': {
        img: {
            display: 'none'
        },
        features: {
            width: '65%',
            gap: '0',
            justifyContent: 'space-between'
        }
    }
}))


const NavBar = () => {
    const navigator = useNavigate()
    const classes = useStyles()

  return (
    <div className={classes.nav}>
        <img src={navLogo} alt='navLogo' className={classes.img} />
        <p className={classes.features}>
            <span>Features</span>
            <span>How it works</span>
        </p>
        <p className={classes.getStarted} onClick={() => navigator(`/${RECORDER_ROUTE}`)}>Get Started</p>
    </div>
  )
}

export default NavBar