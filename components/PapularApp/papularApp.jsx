import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import bg from "../../assets/bg.jpeg";
import styles from "../PapularApp/papularApp.module.css";
import { AiFillApple } from "react-icons/ai";

export const PapularApp = ({
  imgUrl,
  downloads,
  gPlayLink,
  appStoreLink,
  text,
  quoter,
}) => {
  return (
    <>
      <h1 id="popular-apps">Popular Apps</h1>

      <div
        className={styles.main}
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.flex1}></div>
        <div className={styles.flex2}>
          <img
            src={imgUrl}
            height={window.innerWidth > 720 ? "65%" : "80%"}
            style={
              window.innerWidth < 720
                ? { marginTop: "100px" }
                : { marginTop: "0px" }
            }
            className={styles.img}
          />
        </div>
        <div className={styles.flex3}>
          <div>
            <div
              className={styles.AppStore}
              onClick={() => window.open(appStoreLink)}
              style={{ width: "160px" }}
            >
              <div>
                <AiFillApple />
              </div>
              <div>
                <p>
                  Download on the
                  <br />
                  <span>App Store</span>
                </p>
              </div>
            </div>
            <div
              className={styles.GooglePlay}
              onClick={() => window.open(gPlayLink)}
              style={{ width: "160px" }}
            >
              <div>
                <img
                  src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-services-png-logo-3.png"
                  style={{ marginTop: "4px" }}
                  height="30px"
                  width="30px"
                  alt=""
                />
              </div>
              <div>
                <p>
                  GET IT ON
                  <br />
                  <span>Google Play</span>
                </p>
              </div>
            </div>
          </div>{" "}
          <CountUp end={downloads} suffix="K+ downloads" redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <h3 ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <h6
            style={
              window.innerWidth > 720
                ? { color: "black", marginTop: "8px" }
                : {
                    color: "black",
                    marginTop: "8px",
                    textAlign: "center",
                    fontSize: "16px",
                  }
            }
          >
            <quote>
              &ldquo;
              {text}&rdquo;
            </quote>
            <strong>{quoter}</strong>
          </h6>
        </div>
      </div>
    </>
  );
};
