import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../styles/index.css";
import Wheel from "../components/Wheel/wheel.js";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Global } from "../components/Global/Global";
import { CaseStudy } from "../components/CaseStudy/CaseStudy";
import { Footer } from "../components/Footer/Footer";
import { PapularApp } from "../components/PapularApp/papularApp";
import Text from "../assets/text.png";


import VizSensor from "react-visibility-sensor";

import planning from "../components/Wheel/Cycle/img/1.svg";
import analysis from "../components/Wheel/Cycle/img/2.svg";
import design from "../components/Wheel/Cycle/img/3.svg";
import development from "../components/Wheel/Cycle/img/4.svg";
import testing from "../components/Wheel/Cycle/img/5.svg";
import maintenance from "../components/Wheel/Cycle/img/6.svg";
import vector1 from "../assets/case_study/vector_1.png";
import vector2 from "../assets/case_study/vector_2.png";
import vector3 from "../assets/case_study/vector_3.png";
import vector4 from "../assets/case_study/vector_4.png";

import { scrollAnimate } from "../utils/index";

import { FullPage, Slide } from "react-full-page";
import styles from "../components/Wheel/wheel.module.css";

import "aos/dist/aos.css";

const IndexPage = () => {
  const steps = [planning, analysis, design, development, testing, maintenance];

  const [scrollBehaviour, setScrollBehaviour] = useState("normal");
  const [initialSlide, setInitialSlide] = useState("0");
  useEffect(async () => {
    await AOS.init();
    await scrollAnimate();
    await window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > window.innerHeight * 2 &&
        document.documentElement.scrollTop < window.innerHeight * 14
      ) {
        setScrollBehaviour("full-page");
        setInitialSlide("3");
      } else {
        setScrollBehaviour("normal");
      }
    });
    // sidebar for small screens
    window.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") === "open-btn") {
        document.getElementById("mySidepanel").style.width = "250px";
      } else {
        if (e.target.getAttribute("id") !== "mySidepanel") {
          document.getElementById("mySidepanel").style.width = "0px";
        }
      }
    });
  }, []);

  return (
    <>
      <button id="CTA" className="btn">
        Schedule a Call
      </button>

      <div className={styles.section_1} id="section_1Fixed">
        <h3>Great Apps Built Fast</h3>
        <p style={{ fontSize: "18px" }}>
          To build an app that fits the market, we build and test often. To
          build fast with minimum investment we found that it’s best to repeat
          this loop fast and often:
        </p>
      </div>
      

      <div className={styles.stepsFixed} id="stepsFixed">  
      <VizSensor onChange={() => console.log("hello world")}  >
            <div
              className={styles.wheel + "row"}
              style={{ height: "350px", width: "350px", position: "relative"  }}
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
      </div>

      <FullPage
        scrollMode={scrollBehaviour}
        // initialSlide={Number(initialSlide)}
      >
        <Slide>
          <Header />
          <Hero />
        </Slide>
        <Slide>
          <Global />
        </Slide>
        <Slide>
          <Wheel
            deg={300}
            topic="Planning :"
            brief="Find the means and ways for the new system to meet business strategic objectives, resource availability, cost-related issues, timeframes and determining solutions."
          />
        </Slide>
        <Slide>
          <Wheel
            deg={244}
            topic="Analysis :"
            brief="Feasibility analysis displays all the technical and economical aspects impacting the application development process: time, resources and tasks and involvement estimates from the team members help calculate ROI and determine project cost and profit."
          />
        </Slide>
        <Slide>
          <Wheel
            deg={180}
            topic="Design :"
            brief="This is a kind of modeling visually everything starting from the functionality of the solution and up to defining the fundamental hardware/software components, software tools for the future development, structure capabilities, processes to realize its business needs and objectives of the proposed solution."
          />
        </Slide>
        <Slide>
          <Wheel
            deg={120}
            topic="Development :"
            brief="The software engineering team has to make sure their code meets the software requirements specifications, conforms to the stakeholders’ requirements. if the previous stages of software development were carefully fulfilled, the ready-to-use software is bound to match the requirements to the software project."
          />
        </Slide>
        <Slide>
          <Wheel
            deg={60}
            topic="Testing :"
            brief="The Quality Assurance team conducts a series of tests including functionality testing, systems integration, and interoperability as well as user acceptance testing, etc."
          />
        </Slide>
        <Slide>
          <Wheel
            deg={360}
            topic="Operation :"
            brief="The phase is treated with the utmost attention since during the stage the product is polished, upgraded, enhanced and fine-tuned according to the real-world feedback on its performance."
          />
        </Slide>
        <Slide>
          <PapularApp
            imgUrl="https://www.thedroidsonroids.com/wp-content/uploads/2019/01/Onboarding-Greeting-1200x2598.png"
            title="Reflectly"
            text="Our crash rates are down tenfold, and our users are happier than ever."
            quoter="- CPO Reflectly"
            gPlayLink="https://play.google.com/store/apps/details?id=com.reflectlyApp"
            appStoreLink="https://apps.apple.com/us/app/reflectly-mindfulness-journal/id1241229134"
            downloads={34}
          />
        </Slide>
        <Slide>
          <PapularApp
            imgUrl="https://www.thedroidsonroids.com/wp-content/uploads/2019/02/IMG_0925.png"
            title="Hamilton"
            text="creating apps is just faster and more fun with Flutter"
            quoter="- Product Officer, Hamilton"
            downloads={500}
            gPlayLink="https://play.google.com/store/apps/details?id=com.hamilton.app&e=-EnableAppDetailsPageRedesign"
            appStoreLink="https://apps.apple.com/us/app/hamilton-the-official-app/id1255231054"
          />
        </Slide>
        <Slide>
          <PapularApp
            imgUrl="https://www.thedroidsonroids.com/wp-content/uploads/2019/02/Music-Tutor-screen-3.png"
            title="Tutor"
            text="Another advantage of Flutter is that apps made with this technology have native performance."
            quoter="- Project Manager, MusicTutor"
            downloads={500}
            gPlayLink="https://play.google.com/store/apps/details?id=com.jsplash.musictutor"
            appStoreLink="https://play.google.com/store/apps/details?id=com.jsplash.musictutor"
          />
        </Slide>
        <Slide>
          <PapularApp
            imgUrl="https://www.thedroidsonroids.com/wp-content/uploads/2019/02/Pixel-2-Copy-2-1.png"
            title="SLMC"
            text="Debugging was simple"
            quoter="- Developer, SLMC"
            downloads={50}
            gPlayLink="https://play.google.com/store/apps/details?id=com.fadden.slmc"
            appStoreLink="https://play.google.com/store/apps/details?id=com.fadden.slmc"
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector1}
            imgOrder={1}
            textOrder={2}
            title="Find a Problem"
            text="Look for a problem to be solved. The client found a lot of people who want a place to post their work."
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector2}
            imgOrder={window.innerWidth <= 720 ? 1 : 2}
            textOrder={window.innerWidth <= 720 ? 2 : 1}
            title="Create a great design"
            text="Reduces development costs with lower change orders. Familiar user experience Exciting to keep user attention Useful to keep them returning. Social references to help connections grow."
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector3}
            imgOrder={1}
            textOrder={2}
            title="Develop to design specifications quickly"
            text="Picked a versatile platform : Flutter Great development team"
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector4}
            imgOrder={window.innerWidth <= 720 ? 1 : 2}
            textOrder={window.innerWidth <= 720 ? 2 : 1}
            title="The Result"
            text="An attractive user friendly app What do you want to build?"
          />
          <Footer />
        </Slide>
      </FullPage>
    </>
  );
};

export default IndexPage;
