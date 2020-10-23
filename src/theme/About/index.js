import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>What is swizzin?</>,
    description: (
      <>
        swizzin is a collection of bash scripts for Debian-based servers which
        helps you automate the boring and repetitive tasks of installing, managing
        and adminsitering a seedbox server. Originally based on QuickBox, swizzin
        forked away and brought new life to the project in the form of extended OS
        support, the nginx webserver, a custom built dashboard and extended application
        support.
      </>
    ),
  },
  {
    title: <>Why use swizzin?</>,
    description: (
      <>
        swizzin provides an easy to use command-line interface which can interact
        with your server to install applications. Furthermore, for applications
        which do not have built-in updaters, swizzin will often have a scripted
        update path which will help you stay up-to-date with your favourite applications.
      </>
    ),
  },
  {
    title: <>Is swizzin actively maintained?</>,
    description: (
      <>
        Yes! swizzin currently supports Debian Stretch and Buster, as well as Ubuntu Xenial,
        Bionic and Focal. Packages are kept in working order and reported, reproducible issues are
        promptly patched. Support for operating systems is subject to change based on availability
        of upstream support; however, new long-term support versions of Debian & Ubuntu will be added
        accordingly.
      </>
    ),
  },
  {
    title: <>Is swizzin bloated?</>,
    description: (
      <>
        swizzin only installs the applications you request and the dependencies required to support them.
        In addition to this, there are a few other global dependencies installed during setup which are 
        generally required by a large portion of packages. As far as which packages to install, that's
        completely up to you!
      </>
    ),
  },
];

function Question({ title, description }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function About() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
