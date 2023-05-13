// import styles from "./footer.module.css";
import dynamic from "next/dynamic";

import React from "react";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-pattern"]}></div>
      {/* <p>
        
        © Francis Etham 2023
        All Rights Reserved
      </p> */}
    </div>
  );
};

// export default Footer;
export default dynamic (() => Promise.resolve(Footer), {ssr: false}  )
