import React from "react";
import { footerLogo } from "../../assets/index";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";

const useStyles = createUseStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4rem 1rem 1rem 1rem',
        color: '#fff',
        backgroundColor: theme.color.primaryColor,
        fontFamily: theme.font.interFont
    },
    listItem: {
        listStyleType: 'none',
        margin: '1rem 0',
        cursor: 'pointer'
    }
}))

const Footer = () => {
    const classes = useStyles()

    const navigator = useNavigate()
   
  return (
    <div className={classes.container}>
      <div>
        <img src={footerLogo} alt="nav-icon" />
      </div>
      <div>
        <ul>
          <h3 className={classes.listItem}>Menu</h3>
          <li className={classes.listItem} onClick={() => navigator(`/${HOME_ROUTE}`)}>Home</li>
          <li className={classes.listItem}>Converter</li>
          <li className={classes.listItem}>How it works</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3 className={classes.listItem}>About Us</h3>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contact Us</li>
          <li className={classes.listItem}>Privecy Policy</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3 className={classes.listItem}>Scereen Record</h3>
          <li className={classes.listItem}>Browser Window</li>
          <li className={classes.listItem}>Desktop</li>
          <li className={classes.listItem}>Application</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
