import React from "react";
import NavBar from "../../components/nav/NavBar";
import {
  dotedBlue,
  dotedGreen,
  fatherSon,
  recorder,
  revisit,
  shear,
  videoRep,
  womanBlue,
  womanOrange,
} from "../../assets/index";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../../components/index";
import { createUseStyles } from "react-jss";
import FeatureDecCard from "../../components/feat-dec-card/FeatureDecCard";
import ListingCard from "../../components/listing-card/ListingCard";
import Footer from "../../components/footer/Footer";

const useStyles = createUseStyles((theme) => ({
  homeContainer: {
    padding: "1rem 0",
    fontFamily: theme.font.soraFont,
  },
  home: {
    display: "flex",
    marginTop: '4rem'
  },

  titleDesc: {
    width: "70%",
  },
  title: {
    color: theme.color.black,
    width: "80%",
    fontSize: theme.fontSize.titleSize,
    fontWeight: theme.fontWidth.largWidth,
    lineHeight: theme.lineHeight.titleHieght,
  },
  installBtn: {
    textAlign: "start",
  },
  desc: {
    fontSize: theme.fontSize.textSize,
    fontWeight: theme.fontWidth.smallWidth,
    lineHeight: theme.lineHeight.textHeight,
  },
  imgCont: {
    display: "flex",
    gap: '0 1rem',
    position: "relative",
    marginRight: '1rem'
  },
  greenDoted: {
    position: "absolute",
    zIndex: "-1",
    top: "12rem",
    left: '-3rem'
  },
  grupImg: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem 0'
  },
  blueDoted: {
    zIndex: "-1",
    position: "absolute",
    right: "-3rem",
    top: '-3.5rem'
  },

  featureHeader: {
    textAlign: "center",
    marginTop: "8rem",
  },
  featHeaderH2: {
    color: theme.color.primaryColor,
    fontSize: theme.fontSize.middleSize,
    fontWidth: theme.fontWidth.largWidth
  },
  featureDetails: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6rem",
    marginTop: '3rem'
  },
  cardHolder: {
    width: "50%",
  },
  imgHolder: {
    width: "40%",
  },
  listinCardHolder: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: '3rem'
  },

  "@media (max-width: 768px)": {
    home: {
      flexDirection: "column",
      alignItems: "center",
    },
    titleDesc: {
      width: "100%",
      textAlign: "center",
    },
    showcaseCont: {
      width: "100%",
      textAlign: "center",
    },
    title: {
      width: "100%",
      textAlign: "center",
    },
    imgCont: {
      display: "none",
    },
    featureDetails: {
      flexWrap: "wrap",
    },
    installBtn: {
      width: "fit-content",
      margin: "0 auto",
    },
    cardHolder: {
      width: "100%",
    },
    imgHolder: {
      display: "none",
    },
    listinCardHolder: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.homeContainer}>
        <div className={classes.home}>
          <div className={classes.showcaseCont}>
            <div className={classes.titleDesc}>
              <h2 className={classes.title}>Show Them Don't Just Tell</h2>
              <p className={classes.desc}>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <div className={classes.installBtn}>
                <Button
                  btnText="Install HelpMeOut"
                  icon={<AiOutlineArrowRight />}
                />
              </div>
            </div>
          </div>
          <div className={classes.imgCont}>
            <img src={dotedGreen} alt="" className={classes.greenDoted} />

            <div className={classes.grupImg}>
              <img src={womanBlue} alt="woman-blue" />
              <img src={fatherSon} alt="father_son" />
            </div>
            <img
              src={womanOrange}
              alt="woman_orange"
              className={classes.womanOrang}
            />
            <img src={dotedBlue} alt="" className={classes.blueDoted} />
          </div>
        </div>
        <div>
          <div className={classes.featureHeader}>
            <h2 className={classes.featHeaderH2}>Features</h2>
            <p className={classes.featHeaderP}>
              Key Highlights of Our Extension
            </p>
          </div>
          <div className={classes.featureDetails}>
            <div className={classes.cardHolder}>
              <FeatureDecCard
                imgDes={recorder}
                title="Simple Screen Recorder"
                desc="Effortless screen recording for everyone. Record with ease, no tech expertise required."
              />
              <FeatureDecCard
                imgDes={shear}
                title="Easy to shear URL"
                desc="Share your recordings instantly with a single link. No attachments, no downloads."
              />
              <FeatureDecCard
                imgDes={revisit}
                title="Revisit Recordings"
                desc="Access and review your past content effortlessly. Your recordings, always at your fingertips."
              />
            </div>
            <div className={classes.imgHolder}>
              <img src={videoRep} alt="video-bg" />
            </div>
          </div>
        </div>
        <div className={classes.listinCardHolder}>
          <ListingCard
            num="1"
            title="Record Screen"
            desc='Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.'
          />
          <ListingCard
            num="2"
            title="Shear Your Recording"
            desc="We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."
          />
          <ListingCard
            num="3"
            title="Learn Effortlessly"
            desc="Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
