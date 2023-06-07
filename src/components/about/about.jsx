"use client";

import styles from "./about.module.css";
import Pattern2 from "../../../public/images/pattern1.webp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBootstrap,
  faCss3,
  faDocker,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import { useRef, useEffect, useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../context";
import dynamic from "next/dynamic";

const About = () => {
  // const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: headingRef, inView: headingIsVisible } = useInView();
  const { ref: sectionRef, inView: sectionIsVisible } = useInView();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <m.div
      ref={sectionRef}
      className={`${styles.about}  ${
        headingIsVisible ? styles.animateSection : ""
      }`}
      id="about"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <div className={styles["about-left"]}>
        <span className={styles.border} style={{ backgroundColor: darkMode && " #0e0d0d", borderColor: darkMode && "#333" }}>
        <h1
        className={styles.heading}
          // ref={headingRef}
          // className={`${styles.heading}  ${
          //   headingIsVisible ? styles.animateHeading : ""
          // }`}
        >
          About me
        </h1>


        <div>
          <p className={styles.about - 1}>
            Hi there! I'm Francis, a Front-end Web Developer based in Abuja,
            Nigeria. My passion lies in crafting visually stunning and highly 
            responsive user interfaces that are both aesthetically pleasing and
            highly functional. I am a naturally curious & confident person
            and I work on improving my developer skills one pixel at
            a time. I'm an entrepreneur with passion and vision for building
            innovative tech solutions in Nigeria, Africa  and the world at large.
          </p>

          <br />
          <p className={styles.about - 2}>
            When I'm not coding or surfing the internet, you will finding me
            writing music, reading books/e-books, watching tv series,
            learning a new tool, working on my personal development or playing
            basketball. I also enjoy writing articles on
            <a
              href="https://francis123.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              className={styles.hashnode}
            >
              {" "}
              Hashnode.
            </a>
          </p>
          <br />
          <p>
            Lately I am happiest when creating, learning, thinking and exploring
            how to make things better.
          </p>
          <Image src={Pattern2} alt="Pattern1" className={styles["pattern2"]} />
        </div>
        {/* border 2*/}
        </span>
      </div>

      <div className={styles.aboutRight}>
        <span className={styles.border} style={{ backgroundColor: darkMode && " #0e0d0d", borderColor: darkMode && "#333" }}>
       
        <div
          ref={sectionRef}
          className={`${styles.skills}  ${
            headingIsVisible ? styles.animateSection : ""
          }`}
        >
           
          <h1
          className={styles.heading}
            // ref={headingRef}
            // className={`${styles.heading}  ${
            //   headingIsVisible ? styles.animateHeading : ""
            // }`}
          >Skillset
            {/* &lt;Skillset/&gt; */}
          </h1>
          <p>
            <FontAwesomeIcon icon={faReact} height={"20"} width={"20"} /> 
            
            <span
            style={{ backgroundColor: darkMode && "#3d3d3d" }}
            
            > React
            + Next.js</span>
           
          </p>
          <p>
            <FontAwesomeIcon icon={faJs} height={"20"} width={"20"} />{" "}
            <span style={{ backgroundColor: darkMode && "#3d3d3d" }}>JavaScript</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faSass} height={"20"} width={"20"} /> 
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}> SASS +  CSS </span>
          </p>
          <p>
            <FontAwesomeIcon icon={faHtml5} height={"20"} width={"20"} />
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}>HTML5</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faRobot} height={"20"} width={"20"} />{" "}
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}>ChatGPT</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faNodeJs} height={"20"} width={"20"} />{" "}
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}>NodeJs</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faGit} height={"20"} width={"20"} /> 
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d"}}>Git</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faBootstrap} height={"20"} width={"20"} />{" "}
            <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}>BootStrap</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faFigma} height={"20"} width={"20"} />
            <span color="red" style={{ backgroundColor: darkMode &&  "#3d3d3d" }}> Figma</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faDocker} height={"20"} width={"20"} />{" "}
           <span style={{ backgroundColor: darkMode &&  "#3d3d3d" }}> Docker</span>
          </p>
         
        </div>
        </span>
      </div>
    </m.div>
  );
};

// export default About;
export default dynamic (() => Promise.resolve(About), {ssr: false}  )
