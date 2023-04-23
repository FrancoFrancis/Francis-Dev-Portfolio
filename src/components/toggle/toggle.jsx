"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context";
import styles from "./toggle.module.css";
import { riseWithFade } from "../../../utils/utils";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    theme?.dispatch({ type: "TOGGLE" });
    console.log("clicked toggle");
  };

  return (
    <div
      className={styles["toggle"]}
      variants={riseWithFade}
      initial="initial"
      animate="animate"
    >
      <FontAwesomeIcon
        icon={faSun}
        className="toggle-icon"
        alt="toggle icon"
        height={"16"}
        width={"16"}
      />
      <FontAwesomeIcon
        icon={faMoon}
        className="toggle-icon"
        alt="toggle icon"
        height={"16"}
        width={"16"}
      />
      {isMounted && (
        <div
          className={styles["toggle-button"]}
          onClick={handleClick}
          style={{ left: theme?.state?.darkMode ? 0 : 25 }}
        ></div>
      )}
    </div>
  );
};

export default Toggle;
