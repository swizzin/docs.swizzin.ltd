import React from "react";
import clsx from "clsx";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: <>One command to rule them all</>,
    description: (
      <>Install, remove and update apps with ease. Make new users and manage their accounts.</>
    ),
  },
  {
    title: <>All the apps you need</>,
    description: ( 
      <>From autodl to ZNC and everything in between, you won't need to look elsewhere</>
    ),
  },
  {
    title: <>Actively maintained</>,
    description: (
      <>Quick response time to breaking changes when new app versions release</>
    ),
  },
  {
    title: <>Helpful community</>,
    description: (
      <>Need help setting up or making choices? Our community has your back any time</>
    ),
  },
  {
    title: <>Fast and lean</>,
    description: (
      <>Footprint is as light as the choice of your applications</>
    ),
  },
  {
    title: <>Trusted by the industry</>,
    description: (
      <>A popular choice of paid hosting providers, as well as  hobbyist self-hosters</>
    ),
  },
  {
    title: <>Multi-user capable</>,
    description: (
      <>Share your server with others by making them their own server-wide accounts</>
    ),
  },
  {
    title: <>Little skills necessary</>,
    description: (
      <>As long as you can SSH into your server and you know how to read, sky is the limit. Thoroughly fool-proof</>
    ),
  },
  {
    title: <>Stability first</>,
    description: (
      <>Built to make those uptimes grow, but not to keep you on last decade's releases</>
    ),
  },

];

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    const shuffled = array.splice(6, 3);
    return array;
  }

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
  const feats = shuffleArray(data);
  return (
    <>
      {feats && feats.length > 0 && (
        <section id="features" className={styles.features}>
          <div className="container">
            <Headline
              category="Features"
              title="Manage your box with ease and confidence"
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
