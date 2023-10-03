import React, { useState } from "react";
import { facebook, google, navLogo } from "../assets/index";
import { createUseStyles } from "react-jss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { RECORDER_ROUTE } from "../content-management/Landing";

const useStyles = createUseStyles((theme) => ({
  logoDiv: {
    paddingLeft: "3rem",
    paddingTop: "2rem",
  },
  container: {
    width: "30%",
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: theme.font.interFont
  },
  headers: {
    textAlign: "center",
  },
  mediaLog: {
    border: `1px solid ${theme.color.primaryColor}`,
    borderRadius: "5px",
    margin: "10px 0",
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0 1rem",
    cursor: "pointer",
  },
  inputCont: {
    margin: "1rem 0",
  },
  desc: {
    margin: '1rem 0'
  },
  input: {
    width: "100%",
    padding: ".8rem 0",
    marginTop: ".5rem",
  },
  btnCont: {
    margin: "2rem auto",
  },
  or: {
    textAlign: 'center'
  },
  btn: {
    backgroundColor: theme.color.primaryColor,
    color: "#fff",
    padding: "1rem 0",
    borderRadius: "8px",
    border: "none",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
  },

  "@media (max-width: 768px)": {
    btn: {
      padding: "16px 20px",
      fontSize: "14px",
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const toRecordPage = () => {
    navigator(`/${RECORDER_ROUTE}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          toRecordPage();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  return (
    <div>
      <div className={classes.logoDiv}>
        <img src={navLogo} alt="nav-logo" />
      </div>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <div className={classes.headers}>
            <h3>Log in Sign up</h3>
            <p className={classes.desc}>
              Join millons of other in sharing successful moves on{" "}
              <span>HelpMeOut</span>
            </p>
            <div className={classes.mediaLog}>
              <img src={google} alt="" />
              <span>Continue with Google</span>
            </div>
            <div className={classes.mediaLog}>
              <img src={facebook} alt="" />
              <span>Continue with Facebook</span>
            </div>
          </div>
          <div className={classes.or}>Or</div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className={classes.input}
              placeholder="email address"
              disabled={isLoading}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={classes.input}
              placeholder="password"
              disabled={isLoading}
            />
          </div>
          <div className={classes.btnCont}>
            <button className={classes.btn} disabled={isLoading}>
              {isLoading ? <span>Loading...</span> : <span>Sign Up</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
