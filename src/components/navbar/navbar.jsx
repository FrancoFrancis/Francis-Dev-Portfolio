"use client";

import dynamic from "next/dynamic";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";
import { riseWithFade } from "../../../utils/utils";
import styles from "./navbar.module.css";

const navItems = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  return (
    <m.header
      initial="initial"
      animate="animate"
      className={styles.navbar}
      variants={riseWithFade}
    >
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-20}
            duration={400}
            activeClass={styles.active}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </m.header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
