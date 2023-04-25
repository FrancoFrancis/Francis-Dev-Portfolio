"use client";

import styles from "./navbar.module.css";
import { Link } from "react-scroll";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../context";

import { motion as m } from "framer-motion";
import { riseWithFade } from "../../../utils/utils";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <m.div
      initial="initial"
      animate="animate"
      className={styles.navbar}
      style={{ color: darkMode && "white", borderColor: darkMode && "white" }}
      variants={riseWithFade}
    >
      <nav>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={400}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          // style={{  backgroundColor: darkMode && "#585757" }}
        >
          {" "}
          About

        </Link>

        <Link to="projects" spy={true} smooth={true} offset={50} duration={400}
        // style={{  backgroundColor: darkMode && "#585757" }}
        >
          {" "}
          Projects{" "}
          
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={50} duration={400}
        // style={{  backgroundColor: darkMode && "#585757" }}
        >
          {" "}
          Contact{" "}
        </Link>
      </nav>
    </m.div>
  );
};

export default Navbar;
