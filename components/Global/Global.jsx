import React from "react";
import image1 from "../../assets/global_reach/image1.png";
import image2 from "../../assets/global_reach/image2.png";
import image3 from "../../assets/global_reach/image3.png";
import image4 from "../../assets/global_reach/image4.png";
import image5 from "../../assets/global_reach/image5.png";
import image6 from "../../assets/global_reach/image6.png";
import Tick from "../../assets/tick.svg";
import Circle from "../../assets/circle.png"
import styles from "./Global.module.css";

export const Global = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section_1}>
        <div
          className={styles.content}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h1>Global Reach</h1>
          <h5>Online & digital businesses are amazing.</h5>
          <ul>
            <li>
              <img
                src={Circle}
                height="20px"
                width="20px"
                alt=""
                className="mr-1"
                id="circle1"
              />
              <img
                src={Tick}
                id="tick1"
                style={{ display: "none" }}
                height="20px"
                width="26px"
                alt=""
              />
              Offer a Better user experience
            </li>
            <li>
              <img
                src={Circle}
                height="20px"
                width="20px"
                alt=""
                id="circle2"
                className="mr-1"
              />
              <img
                src={Tick}
                id="tick2"
                style={{ display: "none" }}
                height="20px"
                width="26px"
                alt=""
              />
              Have High growth
            </li>
            <li>
              <img
                src={Circle}
                height="20px"
                width="20px"
                alt=""
                id="circle3"
                className="mr-1"
              />
              <img
                src={Tick}
                id="tick3"
                style={{ display: "none" }}
                height="20px"
                width="26px"
                alt=""
              />
              Are Very Scalable
            </li>
            <li>
              <img
                src={Circle}
                height="20px"
                width="20px"
                id="circle4"
                alt=""
                className="mr-1"
              />
              <img
                src={Tick}
                id="tick4"
                style={{ display: "none" }}
                height="20px"
                width="26px"
                alt=""
              />
              Have Global reach
            </li>
          </ul>
          <h5>We help people companies reach a mass audience.</h5>
        </div>
      </div>

      <div className={styles.section_2}>
        <div className={styles.img_container}>
          <div className="parallax">
            <img
              data-aos="fade-left"
              data-aos-duration="500"
              src={image4}
              alt="vector"
              style={{ marginTop: window.innerWidth <= 720 ? "40px" : "" }}
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={image6}
              alt="vector"
              style={{ marginTop: window.innerWidth <= 720 ? "40px" : "" }}
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              src={image3}
              style={{ display: window.innerWidth <= 720 ? "none" : "" }}
              alt="vector"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src={image1}
              style={{ display: window.innerWidth <= 720 ? "none" : "" }}
              alt="vector"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="2500"
              src={image5}
              style={{ display: window.innerWidth <= 720 ? "none" : "" }}
              alt="vector"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="3000"
              src={image2}
              style={{ display: window.innerWidth <= 720 ? "none" : "" }}
              alt="vector"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
