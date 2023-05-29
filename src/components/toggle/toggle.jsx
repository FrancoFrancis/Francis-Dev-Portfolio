"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context";
import styles from "./toggle.module.css";
import { riseWithFade } from "../../../utils/utils";
import dynamic from "next/dynamic";

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
        color="orangered"
        icon={faSun}
        className={styles.Icons}
        alt="toggle icon"
        height={"14"}
        width={"14"}
      />
      {/* <FontAwesomeIcon
        icon={faMoon}
        className={styles.Icons}
        alt="toggle icon"
        height={"16"}
        width={"16"}
      /> */}
      {/* <span
       
        className={styles.Icons}
        alt="toggle icon"
        height={"16"}
        width={"16"}
      >
        🌗
      </span> */}
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

// export default Toggle;
export default dynamic (() => Promise.resolve(Toggle), {ssr: false}  )
