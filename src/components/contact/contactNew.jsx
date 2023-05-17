"use client";

import {
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleRight,
  faArrowRight,
  faCheck,
  faCheckCircle,
  faCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context";
import emailjs, { sendForm } from "@emailjs/browser";
import styles from "./contact.module.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef;

  const { ref: headingRef, inView: headingIsVisible } = useInView();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName(""); // Clears the name input field
    setSubject(""); // Clears the subject input field
    setEmail(""); // Clears the email input field
    setMessage(""); // Clears the email message field
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);

    emailjs
      .sendForm(
        "service_l2a5yce",
        "template_fvcwldi",
        form.current,
        "vR1oXy0at0XPbe-Xk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const { ref: sectionRef, inView: sectionIsVisible } = useInView();

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [showMessage]);

  return (
    <m.div
      // className={styles.contact}
      ref={sectionRef}
      className={`${styles.contact}  ${
        headingIsVisible ? styles.animateSection : ""
      }`}
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <div className={styles["contact-pattern"]}></div>

      <div className={styles["contact-wrapper"]}>
        <div className={styles["contact-left"]}>
          <h1
            className={styles.contactHeading}
            // ref={headingRef}
            // className={`${styles.contactHeading}  ${
            //   headingIsVisible ? styles.animateHeading : ""
            // }`}
          >
            Contact & Connect
          </h1>
          {/* <h1>Lets Discuss your Project</h1> */}

          <div className={styles["socials"]}>
            {/* <h2>Socials</h2> */}
            <div>
              <a
                href="https://twitter.com/EthamFrancis"
                target="_blank"
                className={styles["icon"]}
                style={{ backgroundColor: darkMode && "#333" }}
              >
                <FontAwesomeIcon icon={faTwitter} height={"17"} width={"17"} />
              </a>
              <a
                href="https://www.linkedin.com/in/francis-etham-207202202/"
                className={styles["icon"]}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: darkMode && "#333" }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="icon"
                  height={"17"}
                  width={"17"}
                />
              </a>
              <a
                href="https://github.com/FrancoFrancis"
                className={styles["icon"]}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: darkMode && "#333" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icon"
                  height={"17"}
                  width={"17"}
                />
              </a>
              <a
                href="https://francis123.hashnode.dev/"
                className="icon"
                target="_blank"
                style={{ backgroundColor: darkMode && "#333" }}
              >
                <FontAwesomeIcon
                  icon={faHashnode}
                  className="icon"
                  height={"17"}
                  width={"17"}
                />
              </a>
              {/* <a
                href="https://www.instagram.com/winnermanfrancis/"
                className="icon"
                target="_blank"
                rel="noreferrer" 
                style={{ backgroundColor: darkMode && "#333" }}
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a> */}
            </div>
          </div>

          <div className={styles["email"]}>
            <h2>Got a project in mind?</h2>
            <h1 className={styles["say-hello"]}>
              Say hello 👋🏽 <br />{" "}
              <a style={{ color: darkMode && "#fff" }}>
                {" "}
                francisetham01@gmail.com
              </a>
            </h1>

            <button
              className={styles["resume-Button"]}
              style={{ borderColor: darkMode ? "white" : "" }}
            >
              <a
                href="/Francis-Resume.pdf"
                download="Francis-Resume.pdf"
                // className="resumeButton"
              >
                Download Resume
              </a>
            </button>

            <h2 className={styles.phone}>
              <FontAwesomeIcon
                className="icon"
                color="#252525"
                icon={faPhone}
                height={"20"}
                width={"20"}
              />
              +(234)8105148453
            </h2>
            <h2 className={styles.phone}>
              <FontAwesomeIcon
                className="icon"
                color=" #252525"
                icon={faLocationDot}
                height={"20"}
                width={"20"}
              />
              Abuja, Nigeria.
            </h2>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles["contact-right"]}>
          <p className={styles["desc"]}>
            I am interested in internships and freelance opportunities - However
            if you have other requests or questions, there you go, contact me
            using the form below 😎
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles["contact-form"]}
          >
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={styles.textarea}
              cols="30"
              rows="5"
              name="message"
              placeholder="Message"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              onClick={sendEmail}
              style={{
                borderColor: darkMode && "#fff",
                background: darkMode && "transparent",
                color: darkMode && "white",
                hover: darkMode && "",
              }}
            >
              <span>Shoot</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                height={"16"}
                width={"16"}
                className="arrow-right"
              />
            </button>
          </form>
          {/* popup here */}
          <div>
            {showMessage && (
              <div
                ref={ref}
                className={`${styles.popup} ${darkMode && "dark-mode"}`}
                style={{
                  width: "100vw",
                  height: "100vh",
                  top: 0,
                  left: 0,
                  position: "fixed",
                  background: "#fff",
                  zIndex: 9999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.popup - content}>
                  <p>{message}</p>
                </div>
              </div>
            )}
          </div>
          ); };
        </div>
        <p className={styles["copyright"]}>
          © Francis Etham 2023
          {/* All Rights Reserved */}
        </p>
      </div>
    </m.div>
  );
};

// export default Contact;
export default dynamic(() => Promise.resolve(Contact), { ssr: false });
