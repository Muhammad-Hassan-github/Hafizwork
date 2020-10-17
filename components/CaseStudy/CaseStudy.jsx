import React from "react";
import styles from "./CaseStudy.module.css";

export const CaseStudy = ({ imgUrl, imgOrder, textOrder, title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container} style={{ order: imgOrder }}>
          <img
            src={imgUrl}
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="vector"
          />
      </div>
      <div
        className={styles.text}
        data-aos="zoom-in"
        data-aos-duration="700"
        style={{ order: textOrder }}
      >
          <h1>{title}</h1>
          <p>{text}</p>
      </div>
    </div>
  );
};
