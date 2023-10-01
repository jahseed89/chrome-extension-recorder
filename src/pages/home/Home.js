import React from "react";
import NavBar from "../../components/nav/NavBar";
import { fatherSon, videoRep, womanBlue, womanOrange } from "../../assets/index";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../../components/index";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  homeContainer: {
    padding: "1rem 0",
    fontFamily: theme.font.soraFont,
  },
  home: {
    display: "flex",
  },

  titleDesc: {
    width: "50%",
  },
  title: {
    color: theme.color.black,
    width: '80%',
    fontSize: theme.fontSize.titleSize,
    fontWeight: theme.fontWidth.largWidth,
    lineHeight: theme.lineHeight.titleHieght
  },
  desc: {
    fontSize: theme.fontSize.textSize,
    fontWeight: theme.fontWidth.smallWidth,
    lineHeight: theme.lineHeight.textHeight
  },
  imgCont: {
    display: "flex",
    gap: "0",
  },
  grupImg: {
    display: "block",
  },
  womanOrang: {
    marginLeft: "-10rem",
  },
  featureHeader: {
    textAlign: 'center',
  },
  featHeaderH2: {
    color: 'red'
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.homeContainer}>
        <div className={classes.home}>
          <div>
            <div className={classes.titleDesc}>
              <h2 className={classes.title}>Show Them Don't Just Tell</h2>
              <p className={classes.desc}>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <Button
                btnText="Install HelpMeOut"
                icon={<AiOutlineArrowRight />}
              />
            </div>
          </div>
          <div className={classes.imgCont}>
            <div className={classes.grupImg}>
              <img src={womanBlue} alt="woman-blue" />
              <img src={fatherSon} alt="father_son" />
            </div>
            <img
              src={womanOrange}
              alt="woman_orange"
              className={classes.womanOrang}
            />
          </div>
        </div>
        <div>
          <div className={classes.featureHeader}>
            <h2 className={classes.featHeaderH2}>Features</h2>
            <p className={classes.featHeaderP}>Key Highlights of Our Extension</p>
          </div>
          <div className={classes.featureDetails}>
            <div>

            </div>
            <img src={videoRep} alt="video-bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
