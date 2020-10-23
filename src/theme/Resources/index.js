import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FaQuestion, FaDiscord } from "react-icons/fa";
import { FiBook, FiGithub } from "react-icons/fi";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const size = 48;
const data = [
  {
    href: "/docs/getting-started/faqs",
    icon: <FaQuestion size={size} />,
    description: <>Frequently Asked Questions</>,
  },
  {
    href: "https://discord.gg/sKjs9UM",
    icon: <FaDiscord size={size} />,
    description: <>Join our Discord to keep in touch</>,
  },
  {
    href: "docs",
    icon: <FiBook size={size} />,
    title: <>Documentation</>,
    description: (
      <>Check our documentation to get your devices up and running in minutes</>
    ),
  },
  {
    href: "https://github.com/liaralabs/swizzin",
    icon: <FiGithub size={size} />,
    title: <>Contribute</>,
    description: (
      <>Help us improve by submitting bugs and feature requests on GitHub</>
    ),
  },
];

export default Resources;

function Resource({ href, icon, title, description }) {
  return (
    <Link className={clsx("card", styles.card)} to={href}>
      <div className="card__header">
        {icon && <div className="card__icon">{icon}</div>}
        {title && <h3>{title}</h3>}
      </div>
      {description && (
        <div className="card__body">
          <p>{description}</p>
        </div>
      )}
    </Link>
  );
}

function Resources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={styles.resources}>
          <div className="container">
            <Headline
              category="Resources"
              title="Browse our resources to get started with swizzin"
              offset={1}
            />

            <div className="row">
              {data[0] && data[1] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[0]} />
                  <Resource {...data[1]} />
                </div>
              )}

              {data[2] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[2]} />
                </div>
              )}

              {data[3] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[3]} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
