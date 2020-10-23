import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import About from "@theme/About";
import Applications from "@theme/Applications";
import Features from "@theme/Features";

import Hero from "@theme/Hero";
import Resources from "@theme/Resources";
import QuickStart from "@theme/QuickStart";

import styles from "./styles.module.scss";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { tagline } = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
        <Applications />
        <QuickStart />
        <About />

        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
