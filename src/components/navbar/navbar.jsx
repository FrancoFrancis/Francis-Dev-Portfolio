"use client";

import styles from "./navbar.module.css";
import { Link } from "react-scroll";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../context";

import { motion as m } from "framer-motion";
import { riseWithFade } from "../../../utils/utils";
import dynamic from "next/dynamic";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;


  // const [activeLink, setActiveLink] = useState("");

  //    const handleSetActive = (to) => {
  //      setActiveLink(to);
  //    };

  return (
    <m.div
      initial="initial"
      animate="animate"
      className={styles.navbar}
      style={{ color: darkMode && "white", borderColor: darkMode && "white",  backgroundColor: darkMode && "#252525" }}
      variants={riseWithFade}
    >
      <nav
      
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={400}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          // className={activeLink === "about" ? styles.active : ""}
          // onSetActive={() => handleSetActive("about")}
        >
          {" "}
          About

        </Link>

        <Link
         to="projects" 
         spy={true} 
         smooth={true}
         offset={50} 
         duration={400}
        //  className={activeLink === "projects" ? styles.active : ""}
        //  onSetActive={() => handleSetActive("projects")}
        >
          {" "}
          Projects
          
        </Link>

        <Link
         to="contact" 
         spy={true} 
         smooth={true}
         offset={50} 
         duration={400}
        //  className={activeLink === "contact" ? styles.active : ""}
        // onSetActive={() => handleSetActive("contact")}
        >
    
          Contact{" "}
        </Link>
      </nav>
    </m.div>
  );
};

// export default Navbar;
export default dynamic (() => Promise.resolve(Navbar), {ssr: false}  )