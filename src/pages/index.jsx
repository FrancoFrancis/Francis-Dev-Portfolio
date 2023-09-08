"use client"

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Intro from "../components/intro/intro";
import About from "@/components/about/about";
import Projects from "@/components/projects/project";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scrollToTop/scrollToTop";
import Toggle from "@/components/toggle/toggle";
import Navbar from "@/components/navbar/navbar";
import { useState, useEffect } from "react";


import {
  BounceLoader
} from "react-spinners";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Francis Etham - Fullstack Developer & Entrepreneur</title>
        <meta name="description" content="Francis is a fullstack developer and entrepreneur building innovative tech solutions for a brighter future in Africa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main>
        {loading ? (
          <span className={styles.loader}>
            <h1 className="winnerman">Winnerman Francis.</h1>
            <br />
            <span>
              <BounceLoader
                color={"#5e17eb"}
                backgroundColor={"black"}
                loading={loading}
                size={100}
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
            <Footer />
            <ScrollToTop />
          </>
        )}
      </main>
    </>
  );
}
