"use client";

import dynamic from "next/dynamic";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCheckCircle,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./contact.module.css";

const socials = [
  { href: "https://twitter.com/EthamFrancis", icon: faTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/francis-etham-207202202/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/FrancoFrancis", icon: faGithub, label: "GitHub" },
  { href: "https://www.instagram.com/winnermanfrancis/", icon: faInstagram, label: "Instagram" },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setShowMessage(true);

    emailjs
      .sendForm(
        "service_l2a5yce",
        "template_fvcwldi",
        form.current,
        "vR1oXy0at0XPbe-Xk"
      )
      .catch((error) => {
        console.log(error.text);
      });

    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <m.section
      ref={sectionRef}
      className={styles.contact}
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          <p className={styles.eyebrow}>Contact Me</p>
          <h2 className={styles.contactHeading}>Let&apos;s build something useful.</h2>
          <p className={styles.lede}>
            I&apos;m open to product collaborations, freelance work, internships,
            and thoughtful conversations around technology, startups, Agriculture , Business and AI.
          </p>

          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          <div className={styles.contactDetails}>
            <a className={styles.email} href="mailto:francisetham01@gmail.com">
              francisetham01@gmail.com
            </a>

            <a className={styles.resumeButton} href="/FRANCIS-ETHAM-ISHAKU-Resume 2026.pdf" download="FRANCIS-ETHAM-ISHAKU-Resume 2026.pdf">
              Download Resume
            </a>

            <p>
              <FontAwesomeIcon icon={faPhone} />
              +(234) 810 514 8453
            </p>

            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              Abuja, Nigeria
            </p>
          </div>
        </div>

        <div className={styles.contactRight}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              <span>Shoot</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          {showMessage && (
            <div className={styles.popup} role="status" aria-live="polite">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p>Thanks for reaching out. I&apos;ll get back to you ASAP.</p>
            </div>
          )}
        </div>
      </div>
    </m.section>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
