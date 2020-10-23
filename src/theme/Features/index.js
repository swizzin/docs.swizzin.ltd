import React from "react";
import clsx from "clsx";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: <>One command to rule them all</>,
    description: (
      <>Timestamped and uniquely identified output logs from job executions</>
    ),
  },
  {
    title: <>All the apps you need</>,
    description: <>From autodl to znc and everything in between, you won't need to look elsewhere*
    </>,
  },
  {
    title: <>Actively maintained</>,
    description: (
      <>Quick response time to breaking changes with newly released app versions.</>
    ),
  },
  {
    title: <>Great community</>,
    description: (
      <>Need help setting up or making choices? Our community has your back any time</>
    ),
  },
  {
    title: <>Speed efficient</>,
    description: (
      <>Footprint as lightweight and minimal as your application choices are!</>
    ),
  },
  // {
  //   title: <>We're fucking chill mate</>,
  //   description: (
  //     <>
  //       We're a bunch of normal peeps come hang out m8
  //     </>
  //   ),
  // },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="features" className={styles.features}>
          <div className="container">
            <Headline
              category="Features"
              title="Manage your fleet of devices with ease"
              offset={1}
            />

            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
