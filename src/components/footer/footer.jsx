import styles from "./footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-pattern"]}></div>
      <p>
        
        © Francis Etham 2023 <br />
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
