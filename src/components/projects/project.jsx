"use client";

import dynamic from "next/dynamic";
import React from "react";
import { faCodeBranch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./project.module.css";

const projects = [
  {
    title: "Ortentic",
    stack: "React • Sass • Strapi • Stripe",
    description: "A commerce experience for clothing and curated foreign-used items.",
    code: "https://github.com/FrancoFrancis/ortentic-app",
    live: "https://ortentic-app.vercel.app/",
    status: "e-Commerce product",
  },
  {
    title: "Blink Bank",
    stack: "Next.js • Tailwind CSS",
    description: "A clean fintech website concept with modern banking presentation.",
    code: "https://github.com/FrancoFrancis/Blink-Bank",
    live: "https://blink-bank.vercel.app/",
    status: "Fintech launch",
  },
  {
    title: "Haven Homes",
    stack: "React • Sass",
    description: "A real estate web app focused on property discovery and trust.",
    code: "https://github.com/FrancoFrancis/HAVEN-HOMES",
    live: "https://haven-homes-roan.vercel.app/",
    status: "Real estate",
  },
  {
    title: "Tenzies Game",
    stack: "React • Sass",
    description: "A playful browser game with simple interaction and state logic.",
    code: "https://github.com/FrancoFrancis/tenzies-game",
    live: "https://tenzies-game-flax.vercel.app/",
    status: "Interactive build",
  },
  {
    title: "Tesla Clone",
    stack: "HTML • CSS • JavaScript",
    description: "A focused clone exercise exploring landing page layout and motion.",
    code: "https://github.com/FrancoFrancis/tesla-website-clone",
    live: "https://www.linkedin.com/in/francis-etham-207202202/",
    status: "Interface study",
  },
];

const Projects = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <m.section
      ref={sectionRef}
      className={styles.projects}
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Projects</p>
        <h2 className={styles.projectsHeading}>Selected product builds and experiments.</h2>
      </div>

      <div className={styles.cards}>
        {projects.map((project, index) => (
          <m.article
            key={project.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.06, duration: 0.55, ease: "easeOut" }}
          >
            <div className={styles.cardTop}>
              <span>{project.status}</span>
              <div className={styles.browserDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className={styles.content}>
              <p className={styles.stack}>{project.stack}</p>
              <h3>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
            </div>
            <div className={styles.links}>
              <a target="_blank" rel="noreferrer" href={project.code}>
                <FontAwesomeIcon icon={faCodeBranch} />
                Code
              </a>
              <a target="_blank" rel="noreferrer" href={project.live}>
                <FontAwesomeIcon icon={faGlobe} />
                Live
              </a>
            </div>
          </m.article>
        ))}

        <m.article className={`${styles.card} ${styles.githubCard}`}>
          <div className={styles.content}>
            <p className={styles.stack}>More work</p>
            <h3>Explore the GitHub archive.</h3>
            <p className={styles.desc}>
              More prototypes, learning projects, and product experiments live there.
            </p>
          </div>
          <div className={styles.links}>
            <a target="_blank" rel="noreferrer" href="https://github.com/FrancoFrancis">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </div>
        </m.article>
      </div>
    </m.section>
  );
};

export default dynamic(() => Promise.resolve(Projects), { ssr: false });
