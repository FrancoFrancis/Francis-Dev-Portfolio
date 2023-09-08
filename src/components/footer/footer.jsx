import dynamic from "next/dynamic";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Francis Etham 2026. Built with intent in Nigeria.</p>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
