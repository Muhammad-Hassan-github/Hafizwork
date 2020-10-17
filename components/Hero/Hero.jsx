import React from "react";
import image1 from "../../assets/hero/image1.png";
import image2 from "../../assets/hero/image2.png";
import image3 from "../../assets/hero/image3.png";
import styles from "./Hero.module.css";
import { Fade } from "react-reveal";

export const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>A Partner to build Online Businesses</h1>
          <p>We fund & build online businesses.</p>
        </div>
        <div className={styles.img_container}>
          <Fade right>
            <img
              src={image1}
              id="right-img"
              style={{ display: "none" }}
              alt="vector"
            />
          </Fade>
          <img
            src={image3}
            style={{ zIndex: "1" }}
            className={styles.resImgCenter}
            alt="vector"
          />
          <Fade left>
            <img
              src={image2}
              id="left-img"
              style={{ display: "none" }}
              alt="vector"
            />
          </Fade>
          {window.screenTop > 50}
        </div>
      </div>
      <div className={styles.wave}>
        <svg
          className={styles.wav}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 350"
        >
          <path
            fill="#77CC6D"
            d="M 0 60 Q 500 200 950 250 Q 1420 300 1440 60 "
          ></path>
        </svg>
      </div>
    </>
  );
};
