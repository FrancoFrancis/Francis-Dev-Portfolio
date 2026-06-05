"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";
import { winnerman2026 } from "@/images";
import styles from "./intro.module.css";

const techItems = [
  { label: "React", top: "8%", left: "7%" },
  { label: "Next.js", top: "14%", left: "72%" },
  { label: "TypeScript", top: "72%", left: "12%" },
  { label: "Node.js", top: "66%", left: "78%" },
  { label: "Tailwind CSS", top: "30%", left: "82%" },
  { label: "ChatGPT", top: "84%", left: "48%" },
];

const Intro = () => {
  return (
    <m.section 
      id="intro" 
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.heroCopy}>
        <m.span
          className={styles.badge}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          FULLSTACK DEVELOPER • ENTREPRENEUR
        </m.span>

        <m.h3
          className={styles.headline}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.06, duration: 0.7, ease: "easeOut" }}
        >
          Hello there, I&apos;m <span className={styles.name}>Francis</span>.
          <br />
          I build innovative tech solutions for a brighter future in{" "}
          <span className={styles.highlight}>Africa 🚀</span>.
        </m.h3>

        <m.p
          className={styles.description}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.14, duration: 0.7, ease: "easeOut" }}
        >
          I use AI and modern technologies to build scalable digital products
          and impactful user experiences for startups, businesses and people.
        </m.p>

        <m.div
          className={styles.actions}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <Link
            to="projects"
            smooth={true}
            offset={-20}
            duration={500}
            className={styles.primaryButton}
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-20}
            duration={500}
            className={styles.secondaryButton}
          >
            Let&apos;s Connect
          </Link>
        </m.div>

        <m.p
          className={styles.availability}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.26, duration: 0.7, ease: "easeOut" }}
        >
          <span aria-hidden="true" />
          Based in Abuja Nigeria — Available worldwide
        </m.p>
        <m.p
          className={styles.availability}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.26, duration: 0.7, ease: "easeOut" }}
        >
          <span aria-hidden="true" />
          Big Fan Of Rice and Chicken stew 🍛
        </m.p>
      </div>

      <div className={styles.heroVisual}>
        <m.div
          className={styles.portraitCard}
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.imageFrame}>
            <Image
              src={winnerman2026}
              alt="Portrait of Francis"
              className={styles.portrait}
              priority
              fill
              sizes="(max-width: 768px) 88vw, 520px"
            />
          </div>

          {techItems.map((item, index) => (
            <m.div
              key={item.label}
              className={styles.techPill}
              style={{ top: item.top, left: item.left }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            >
              {item.label}
            </m.div>
          ))}
        </m.div>
      </div>
    </m.section>
  );
};

export default dynamic(() => Promise.resolve(Intro), { ssr: false });
