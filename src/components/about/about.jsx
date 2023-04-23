"use client";

import styles from "./about.module.css";
// import Me from "../../images/violet-happiness.png"
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
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: headingRef, inView: headingIsVisible } = useInView();
  const { ref: sectionRef, inView: sectionIsVisible } = useInView();

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
        <h1
          ref={headingRef}
          className={`${styles.heading}  ${
            headingIsVisible ? styles.animateHeading : ""
          }`}
        >
          About Me
        </h1>

        {/* <h1 ref={headingRef} >ABOUT ME {myElementIsVisible ? 'yes' : 'no'} </h1> */}

        <div>
          <p className={styles.about - 1}>
            Hi there! I'm Francis, a Frontend Web developer based in Abuja,
            Nigeria. My passion lies in crafting visually stunning and highly 
            responsive user interfaces that are both aesthetically pleasing and
            highly functional. I am a naturally curious & confident person
            and I work on improving my developer skills one pixel at
            a time. I'm an entrepreneur with the vison for building
            for the future of technology in Africa. My Goal is to build Ortentic
            Nigeria(Startup) and get Product Market Fit.
          </p>

          <br />
          <p className={styles.about - 2}>
            When I'm not coding or surfing the internet, you will finding me
            reading books/e-books, writing song lyrics, watching tv series,
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
      </div>

      <div className={styles["about-right"]}>
        <div
          ref={sectionRef}
          className={`${styles.skills}  ${
            headingIsVisible ? styles.animateSection : ""
          }`}
        >
          <h1
            ref={headingRef}
            className={`${styles.heading}  ${
              headingIsVisible ? styles.animateHeading : ""
            }`}
          >
            &lt;Skillset/&gt;{" "}
          </h1>
          <p>
            <FontAwesomeIcon icon={faReact} height={"20"} width={"20"} /> React
            + Next.js{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faJs} height={"20"} width={"20"} />{" "}
            JavaScript
          </p>
          <p>
            <FontAwesomeIcon icon={faSass} height={"20"} width={"20"} /> SASS +
            CSS
          </p>
          <p>
            <FontAwesomeIcon icon={faHtml5} height={"20"} width={"20"} />
            HTML5
          </p>
          <p>
            <FontAwesomeIcon icon={faRobot} height={"20"} width={"20"} />{" "}
            ChatGPT{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faNodeJs} height={"20"} width={"20"} />{" "}
            NodeJs{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faGit} height={"20"} width={"20"} /> Git{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faBootstrap} height={"20"} width={"20"} />{" "}
            BootStrap{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faFigma} height={"20"} width={"20"} /> Figma{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faDocker} height={"20"} width={"20"} />{" "}
            Docker{" "}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default About;
