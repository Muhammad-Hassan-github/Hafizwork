import React, { useState, useEffect } from "react";
import VizSensor from "react-visibility-sensor";
import { FaCaretLeft } from "react-icons/fa";
import Cycle from "../../assets/cycle.png";
import Text from "../../assets/text.png";
import planning from "./Cycle/img/1.svg";
import analysis from "./Cycle/img/2.svg";
import design from "./Cycle/img/3.svg";
import development from "./Cycle/img/4.svg";
import testing from "./Cycle/img/5.svg";
import maintenance from "./Cycle/img/6.svg";
// import Cycle from "./Cycle/Cycle"

import styles from "./wheel.module.css";

export default function Wheel({ topic, brief, deg }) {
  const [degree, setDegree] = useState(0);
  const steps = [planning, analysis, design, development, testing, maintenance];

  // const rotateImage = () => {
  //   setTimeout(() => {
  //     var count = 0;
  //     var start = setInterval(function () {
  //       if (count == deg) clearInterval(start);
  //       setDegree(count);
  //       count += 4;
  //     }, 15);
  //   }, 100);
  // };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_2}>
          <VizSensor onChange={() => console.log("hello world")}  >
            <div
              className={styles.wheel + "row"}
              style={{ height: "350px", width: "350px", position: "relative" , visibility:"hidden"  }}
            >
              {steps.map((img, index) => {
                return (
                  <img
                    src={img}
                    id="wheelDiv"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      height: "90%",
                    }}
                    id={"step" + index}
                    onClick={(e) => console.log(e.target)}
                  />
                );
              })}
              <img
                src={Text}
                id="wheelDiv"
                style={{
                  position: "absolute",
                  height: "120px",
                  width: "120px",
                  top: "100px",
                  left: "100px",
                }}
              />
            </div>
          </VizSensor>
          <p id="nav0" className={styles.dynamicText} id="dynamicpara"  style={{visibility:"hiddin"}}>
            <strong>{topic}</strong>
            <br />
            {brief}
          </p>
        </div>
      </div>
    </>
  );
}
