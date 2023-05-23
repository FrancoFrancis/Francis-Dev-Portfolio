"use client"

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Intro from "../components/intro/intro";
import About from "@/components/about/about";
import Projects from "@/components/projects/project";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scrollToTop/scrollToTop";
import Toggle from "@/components/toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Navbar from "@/components/navbar/navbar";
import { useState, useEffect } from "react";


import {
  HashLoader,
  RotateLoader,
  PropagateLoader,
  ClipLoader,
  BounceLoader
} from "react-spinners";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>FrancisDev-Portfolio 🚀</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundColor: darkMode ? "#000" : "white",
          color: darkMode && "#fff",
        }}
      >
        {loading ? (
          <span className={styles.loader}>
            <h1>Winnerman Francis. </h1>
            <br />
            <span>
              <PropagateLoader
                color={"orangered"}
                backgroundColor={"black"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1.3}
              />
            </span>
          </span>
        ) : (
          <>
            {/* <WinnermansCursor/> */}
            <Navbar />
            <Toggle />
            <Intro />
            <About />
            <Projects />
            <Contact />
            {/* <Footer /> */}
            <ScrollToTop />
          </>
        )}
      </main>
    </>
  );
}
