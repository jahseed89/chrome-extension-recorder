import React from "react";
import "./recorder.scss";
import NavBar from "../../components/nav/NavBar";
import BtnTrns from "../../components/button/BtnTrns";
import { SiFacebook } from "react-icons/si";
import { PiWhatsappLogoThin, PiTelegramLogoLight } from "react-icons/pi";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { GoCopy } from "react-icons/go";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  recordingVideoSec: {
    width: "70%",
    fontFamily: theme.font.interFont
  },
  inputSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0",
  },
  input: {
    width: "400px",
    padding: "20px 5px",
  },
  sendBtn: {
    backgroundColor: "#bfbfce",
    color: "#fff",
    borderRadius: "5px",
    marginLeft: "-2.8rem",
    border: "none",
    padding: "10px 6.5pxpx",
  },
  transScr: {
    fontFamily: theme.font.interFont
  },
  copyBtn: {
    textAlign: "center",
    borderRadius: "5px",
    marginLeft: "-6rem",
    border: "none",
    padding: "10px 20px",
  },
  shearVideo: {
    margin: "1rem 0",
  },
  shear: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35%'
  },
  saveContent: {
    width: "40%",
    textAlign: "center",
    margin: "1rem auto",
  },

  saveBtn: {
    width: "fit-content",
    margin: "0 auto",
  },
}));

const Recorder = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.recordingVideoSec}>
        <h2>Your video is ready</h2>
        <p>name</p>
        <p>Untitled_video_234443344555</p>
        <video controls>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.inputSection}>
          <div>
            <input
              placeholder="enter email receiver"
              className={classes.input}
            />
            <button className={classes.sendBtn}>Save</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="video url"
              className={classes.input}
            />
            <button className={classes.copyBtn}>
              <GoCopy /> Copy
            </button>
          </div>
        </div>
        <div className={classes.shearVideo}>
          <h3>Shear your video</h3>
          <div className={classes.shear}>
            <BtnTrns icon={<SiFacebook />} txt="Facebook" />
            <BtnTrns icon={<PiWhatsappLogoThin />} txt="WhatsApp" />
            <BtnTrns icon={<PiTelegramLogoLight />} txt="Telegram" />
          </div>
        </div>
      </div>
      <div className={classes.transScr}>
        <h3>Transcript</h3>
        <div>
          <ul>
            <li>
              <span>rate</span>
              <span>des</span>
            </li>
            <li>
              <span>rate</span>
              <span>des</span>
            </li>
            <li>
              <span>rate</span>
              <span>des</span>
            </li>
          </ul>
        </div>
        <div className={classes.saveContent}>
          <h3>
            To ensure the availability and privacy of your video, we recoment
            saving it to your account
          </h3>
          <p className={classes.saveBtn}>
            <Button btnText="Save Video" />
          </p>
          <h3>
            Don't have an account? <Link>Create Account</Link>
          </h3>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Recorder;
