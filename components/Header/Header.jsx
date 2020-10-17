import React from "react";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menuIcon.svg";
import styles from "./Header.module.css";

export const Header = () => {
  const options = ["Schedule Call", "Discuss Ideas", "Ask a Question"];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h3>OPZOOM</h3>
        </div>
        <div className={styles.nav_container}>
          {options.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
        </div>
        <div className={styles.menu_icon_container}>
          <img
            src={menuIcon}
            alt="menuIcon"
            className={styles.menu_icon}
            id="open-btn"
          />
        </div>
      </div>
      <div
        id="mySidepanel"
        style={{ height: window.innerHeight }}
        className="sidepanel"
      >
        <p style={{fontSize: 'bold', marginTop: '-30px'}}>
          <img src={logo} alt="logo" height="30px" width="30px" />
          OPZOOM
        </p>
        <hr/>
        {options.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </div>
  );
};
