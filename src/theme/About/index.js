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
    title: <>Is swizzin actively maintained?</>,
    description: (
      <>
        Yes! swizzin currently supports Debian Buster, and Bullseye as well as Ubuntu Focal and Jammy.
        Packages are kept in working order and reported, reproducible issues are promptly patched.
        Support for operating systems is subject to change based on availability of upstream support;
        however, new long-term support versions of Debian & Ubuntu will be added accordingly.
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
  {
    title: <>Why not put it all in docker?</>,
    description: (
      <>
        We prefer to keep our applications running as close to the metal as possible.
        There are many valid times and places where docker would be a good systematic choice, however we believe the trade-offs are not worth it for a seedbox scenario.
        Keeping apps outside of containers helps you grow buffer, and a lets you tinker with everything as much as you want.
      </>
    ),
  },
  {
    title: <>Is swizzin good?</>,
    description: (
      <>
        It won't end world hunger, it's not going to cure AIDS or adopt all the stray dogs, but it will do what it says it does and make your life easier so there's that.
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
          <div className="col col--6">
            {/* data[4] && <Question {...data[4]} /> */}
            {/* {data[5] && <Question {...data[5]} />} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
