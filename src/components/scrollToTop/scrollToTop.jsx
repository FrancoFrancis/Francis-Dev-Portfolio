"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import styles from "./scrollToTop.module.css";
import dynamic from "next/dynamic";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles["scroll-to-top"]} onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className={styles["top-btn-icon"]}
            height={"19"}
            width={"19"}
          />
        </div>
      )}
    </div>
  );
}

// export default ScrollToTop;
export default dynamic (() => Promise.resolve(ScrollToTop), {ssr: false}  )
