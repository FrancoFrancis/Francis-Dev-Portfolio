"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context";
import styles from "./toggle.module.css";
import dynamic from "next/dynamic";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const dark = theme?.state?.darkMode;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = () => theme?.dispatch({ type: "TOGGLE" });

  return (
    <div className={styles.container}>
      <span className={styles.logo}>WF.</span>
      <button
        aria-pressed={!!dark}
        aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        className={styles.track}
        onClick={handleClick}
      >
        <span className={styles.iconLeft} aria-hidden>
          <FontAwesomeIcon icon={faSun} />
        </span>
        <span className={styles.iconRight} aria-hidden>
          <FontAwesomeIcon icon={faMoon} />
        </span>
        {mounted && (
          <span
            className={styles.thumb}
            style={{ transform: dark ? "translateX(28px)" : "translateX(2px)" }}
          />
        )}
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Toggle), { ssr: false });
