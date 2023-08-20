"use client";

import styles from "./intro.module.css";
import { easeOut, motion as m, useInView } from "framer-motion";

import React, { useContext } from "react";
// import HandDrawn from "../../../public/images/u-code.svg";
// import Arrow1 from "../../../public/images/u-arrow1.svg";
// import Arrow2 from "../../../public/images/u-arrow2.svg";
// import Arrow3 from "../../../public/images/u-arrow3.svg";
// import CurvedUnderline from "../../../public/images/u-curved-underline.svg";
// import Hat from "../../../public/images/u-party-hat.svg";
// import Rocket from "../../../public/images/u-rocket.svg";
// import Star from "../../../public/images/u-star.svg";
// import TwoLines from "../../../public/images/u-two-lines.svg";
// import TwoLines1 from "../../../public/images/u-two-lines1.svg";

// import Me from "../../../public/images/space.png";
import WalkingWinnerman from "../../../public/images/winnermanfrancis.JPG";
// import zaza from "../../../public/images/zaza.gif";
import { Link } from "react-scroll";
import { ThemeContext } from "../../../context";
import Image from "next/image";
import { container, item } from "../../../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowDown19 } from "@fortawesome/free-solid-svg-icons";
// import Design from "../design/design";
import { FaArrowDown, HiArrowLongDown } from "react-icons/fa";
import { riseWithFade, staggerChildren } from "../../../utils/utils";
import dynamic from "next/dynamic";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  // const { ref: sectionRef, inView: sectionIsVisible } = useInView();

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className={styles["intro"]}
      // className={`${styles.intro}  ${
      //   sectionIsVisible ? styles.animateSection : ""
      // }`}
      // ref={sectionRef}
    >
      <div className={styles["intro-left"]}>
        <div className={styles["intro-left-wrapper"]}>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            offset={50}
            duration={400}
            className={styles.Logo}
            style={{ color: darkMode && "#5e17eb" }}
            variants={riseWithFade}
            href="#"
          >
             WF.
          </Link>

          {/* <m.h1
            className={styles.helloThere}
            style={{ color: darkMode && "#9696960e" }}
            variants={riseWithFade}
          >
            <h1> Hello</h1>
            <h1> There,</h1>
          </m.h1> */}

          <m.div className={styles.container}>
          

            <m.h1
              variants={riseWithFade}
              className={styles.introName}
              id="my-text"
              style={{ color: darkMode && "#fff" }}
            >
              Hello there <br /> i'm  <span> francis.</span>
            </m.h1>

            <br />
            <m.div className={styles["intro-title"]} variants={riseWithFade}>
              <div
                className={styles["intro-title-wrapper"]}
                style={{ color: darkMode && "#fff" }}
              >
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Frontend Web Developer
                </div>
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Entrepreneur
                </div>
          
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Gamer
        
                </div>
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Writer
                </div>
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Content Creator
                </div>
              </div>
            </m.div>
            <br />

            <m.div
              className={styles["intro-desc"]}
              style={{
                background: darkMode && "",
                color: darkMode ? " #636363" : "",
              }}
              variants={riseWithFade}
            >
              {/* I develop websites and Web Apps - */}I have deep sense for
              developing visually <br />  stunning  and  responsive User Interfaces.
            </m.div>

            <m.div
              variants={riseWithFade}
              className={styles["fav-food"]}
              style={{ color: darkMode && "white" }}
            >
             big fan of rice and chicken stew 🍛
            </m.div>

            <m.span variants={riseWithFade}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
                className={styles.flatButton}
                style={{
                  background: darkMode && "#5e17eb",
                  color: darkMode ? "#fff" : "",
                  borderColor: darkMode ? "#fff" : "",
                }}
              >
                Hire Me
              </Link>
            </m.span>

            <m.span
              className={styles.scrollDown}
              style={{ color: darkMode && "white" }}
              variants={riseWithFade}
            >
              <p className={styles.arrowDown}>Scroll down</p>

              <FaArrowDown
                
                width={30}
                height={30}
                color="orangered"
              />
            </m.span>

          </m.div>
        </div>
      </div>

      <m.div className={styles["intro-right"]} variants={riseWithFade}
       style={{
        background: darkMode && " #00001",
        color: darkMode ? "" : "",
      }}
      >
        {/* <Image src={Me} alt="3D icon" className={styles.me} /> */}
        <div className={styles.breathingContainer}>
        <Image src={WalkingWinnerman} alt="3D icon" className={styles.me} />
        <div  className={styles.behindme}></div>
        <div  className={styles.behindme1}></div>
        <div  className={styles.behindme2}></div>
        <div  className={styles.behindme3}></div>
        
        </div>
        
      </m.div>
    </m.div>
  );
}

export default dynamic (() => Promise.resolve(Intro), {ssr: false}  )