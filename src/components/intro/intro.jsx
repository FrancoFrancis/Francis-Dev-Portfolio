"use client";

import styles from "./intro.module.css";
import { easeOut, motion as m } from "framer-motion";

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

import Me from "../../../public/images/space.png";
import Pattern1 from "../../../public/images/pattern1.webp";
import { Link } from "react-scroll";
import { ThemeContext } from "../../../context";
import Image from "next/image";
import { container, item } from "../../../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowDown19 } from "@fortawesome/free-solid-svg-icons";
// import Design from "../design/design";
import { FaArrowDown, HiArrowLongDown } from "react-icons/fa";
import { riseWithFade, staggerChildren } from "../../../utils/utils";

export default function Intro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className={styles["intro"]}
    >
      <div className={styles["intro-left"]}>
        <div className={styles["intro-left-wrapper"]}>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            offset={50}
            duration={400}
            className={styles["Logo"]}
            style={{ color: darkMode && "gray" }}
            variants={riseWithFade}
          >
            {" "}
            <span>
              WF.
              {/* <Image className={styles.rocketLogo} src={Rocket} alt="3D icon" />  */}
            </span>
          </Link>

          <m.h1
            className={styles.helloThere}
            style={{ color: darkMode && "#a8a8a80e" }}
            variants={riseWithFade}
          >
            {" "}
            Hello There,
          </m.h1>
          <m.div className={styles.container}>
            <h1
              className={styles["intro-hi"]}
              style={{ color: darkMode && "white" }}
            >
              {/* hi there, i'm */}
            </h1>

            <m.h1
              variants={riseWithFade}
              className={styles.introName}
              id="my-text"
              style={{ color: darkMode && "#fff" }}
            >
              i'm francis.
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
                  Designer
                </div>
                <div
                  className={styles["intro-title-item"]}
                  style={{ color: darkMode && "#fff" }}
                >
                  Gamer
                  {/* Content Creator */}
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
                ></div>
              </div>
            </m.div>
            <br />

            <m.div
              className={styles["intro-desc"]}
              style={{
                background: darkMode && "",
                color: darkMode ? "" : "",
              }}
              variants={riseWithFade}
            >
              {/* I develop websites and Web Apps - */}I have deep sense for
              developing visually stunning and responsive User Interfaces.
            </m.div>

            <m.h3
              variants={riseWithFade}
              className={styles["fav-food"]}
              style={{ color: darkMode && "white" }}
            >
              Wanna make me happy? give me rice and chicken stew 🍛
            </m.h3>

            <m.span variants={riseWithFade}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
                className={styles.flatButton}
                style={{
                  background: darkMode && "transparent",
                  color: darkMode ? "#fff" : "#000",
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
              <p>Scroll down</p>

              <FaArrowDown
                className={styles.arrowDown}
                width={30}
                height={30}
              />
            </m.span>

          </m.div>
        </div>
      </div>

      <m.div className={styles["intro-right"]} variants={riseWithFade}>
        <Image src={Me} alt="3D icon" />
      </m.div>
    </m.div>
  );
}

