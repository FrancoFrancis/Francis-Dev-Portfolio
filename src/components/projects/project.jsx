"use client";

import React, { useContext } from "react";
import { faCodeBranch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./project.module.css";
import { ThemeContext } from "../../../context";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const { ref: headingRef, inView: headingIsVisible } = useInView();
  const { ref: sectionRef, inView: sectionIsVisible } = useInView();
  return (
    <m.div
      ref={sectionRef}
      className={`${styles.projects}  ${
        headingIsVisible ? styles.animateSection : ""
      }`}
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <h1
      className={styles.projectsHeading}
        // ref={headingRef}
        // className={`${styles.projectsHeading}  ${
        //   headingIsVisible ? styles.animateHeading : ""
        // }`}
      >
        Projects
      </h1>
      {/* className='projects-heading' */}
      <div className={styles["cards"]}>
        {/* one */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser}
          style={{ backgroundColor: darkMode && "#00000018" }}
          >
            <div className={styles.pcircle} ></div>
            <div className={styles.pcircle}></div>
            <div className={styles.pcircle}></div>
          </div>

          <div className={styles["content"]}>
            <h1>Ortentic </h1>
            <p>REACT + SASS + STRAPI + STRIPE</p>
            <p>E - commerce App for clothing and foreign used items </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/ortentic-app"
                style={{ color: darkMode && "#fff" }}
              >
                
               
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                  className={styles.linkIcon}
                  // color="orangered"
                />
                Code
                </p>
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ortentic-app.vercel.app/"
                style={{ color: darkMode && "#fff" }}
                
              >
                
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon icon={faGlobe} height={"14"} width={"14"} className={styles.linkIcon} />
                  Live Demo (under construction)
                  </p>
              </a>
            </span>
          </div>
          <span
            className={styles["circle"]}
            style={{ color: darkMode && "#fff" }}
          ></span>
        </div>
        {/* two */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser} 
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
          
          >
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Blink Bank</h1>
            <p>Nextjs + Tailwinds CSS</p>
            <p className={styles["desc"]}>
              Banking Website{" "}
            </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/Blink-Bank"
                style={{ color: darkMode && "#fff" }}
                >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                  className={styles.linkIcon}
                  />
                  Code

                </p>
                
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://blink-bank.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"}  className={styles.linkIcon} />
                  Live Demo
                  </p>
                
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* three */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser} 
          style={{ backgroundColor: darkMode && "#00000018" }}
          
          >
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Haven Homes</h1>
            <p>REACT + SASS</p>
            <p>Real Estate Web App </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/HAVEN-HOMES"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                  className={styles.linkIcon}
                />
                  Code
                  </p>
               
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://haven-homes-roan.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}><FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"}  className={styles.linkIcon} />
                  Live Demo
                  </p>
                
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>

        {/* four */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser} 
          style={{ backgroundColor: darkMode && "#00000018" }}
          >
            <div className={styles.pcircle} ></div>
            <div className={styles.pcircle}></div>
            <div className={styles.pcircle}></div>
          </div>

          <div className={styles["content"]}>
            <h1>Tenzies Game</h1>
            <p>REACT + SASS </p>
            <p>Tenzies game for my friends </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/tenzies-game"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                  className={styles.linkIcon}
                />
                  Code
                  </p>
              
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tenzies-game-flax.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} className={styles.linkIcon} />

                  Live Demo
                  </p>
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* five*/}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser}
          style={{ backgroundColor: darkMode && "#00000018" }}
          >
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Tesla Clone</h1>
            <p>HTML + CSS + JavaScript</p>
            <p> Tesla official website clone </p>


            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/tesla-website-clone"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                  className={styles.linkIcon}
                />
                  Code
                  </p>
                
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="linkedin.com"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#000" }}>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} className={styles.linkIcon} />
                  Live Demo
                  </p>
               
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* six */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#0e0d0d", color :darkMode && "#fff" }}
        >
          <div className={styles.pBrowser}
          style={{ backgroundColor: darkMode && "#00000018" }}
          >

            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Go-to my Github</h1>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis"
                style={{ color: darkMode && "#fff" }}
              >
                <p style={{ backgroundColor: darkMode && "#333" }}>
                <FontAwesomeIcon icon={faGithub} height={"16"} width={"16"} className={styles.linkIcon} />
                  Go-to my GitHub for more...
                  </p>
                
              </a>
            </span>
          </div>
          <span
            className={styles["circle"]}
            style={{ borderColor: darkMode && "white" }}
          ></span>
        </div>
      </div>
    </m.div>
  );
};

// export default Projects;
export default dynamic (() => Promise.resolve(Projects), {ssr: false}  )
