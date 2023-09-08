"use client";

import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faDocker,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faCss3,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./about.module.css";

const skills = [
  { label: "React / Next.js", icon: faReact },
  { label: "JavaScript", icon: faJs },
  { label: "TypeScript mindset", icon: faRobot },
  { label: "Sass + CSS", icon: faSass },
  { label: "HTML5", icon: faHtml5 },
  { label: "Node.js", icon: faNodeJs },
  { label: "Git", icon: faGit },
  { label: "Tailwind CSS", icon: faBootstrap },
  { label: "Figma", icon: faFigma },
  { label: "Docker", icon: faDocker },
  { label: "CSS", icon: faCss3 },
  { label: "Github", icon: faGithub },
];


const About = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <m.section
      ref={sectionRef}
      className={styles.about}
      id="about"
      initial={{ opacity: 0, y: 32 }}
      animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.panel}>
        <p className={styles.eyebrow}>About</p>
        <h2 className={styles.heading}>Product-minded engineering for ambitious ideas.</h2>
        <div className={styles.copy}>
          <p>
            I&apos;m Francis — a Full-Stack Developer and Entrepreneur building technology products for the future. 
            I specialize in creating modern web applications, scalable product systems, and AI-enhanced digital experiences/workflows that help startups move faster and businesses operate more efficiently. My approach goes beyond writing code; I think deeply about product strategy, user experience, performance, and execution—because great products aren’t just functional, they’re intuitive, trustworthy, and memorable.
          </p>
          <p>
            Today, I’m focused on building impactful technology ventures while continuously exploring how AI and modern development tools can accelerate innovation. My mission is simple: create products that solve meaningful problems and contribute to a more innovative and prosperous future for Africa and the world.
            speed, clarity, trust, and the confidence that a product was built with intent.
          </p>
          <p>
            Outside of tech, I enjoy playing basketball and exploring music—both of which keep me creative, disciplined, and inspired in how I build and think. Whether I’m developing software, launching new ideas, or refining existing products, I’m driven by curiosity, continuous learning, and a commitment to building things that matter.
          </p>
        
        </div>
      </div>

      <div className={styles.panel}>
        <p className={styles.eyebrow}>Skillset</p>
        <h2 className={styles.heading}>Modern tools</h2>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill.label} className={styles.skill}>
              <FontAwesomeIcon icon={skill.icon} />
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </m.section>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
