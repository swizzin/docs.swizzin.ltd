import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Tabs from '@site/src/theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeSnippet from "@site/src/theme/CodeSnippet";
import { FiGithub } from "react-icons/fi";
import { DiDebian, DiUbuntu } from "react-icons/di";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const installmethod = [
    {
        label: "curl",
        cmd: `bash <(curl -sL https://git.io/swizzin-setup)`,
    },
    {
        label: "wget",
        cmd: `bash <(wget -O- -q https://git.io/swizzin-setup)`
    }
]

function QuickStart() {
  const size = 36;


  return (
    <section id="quick-start" className={styles.download}>
      <div className="container">
        <Headline
          category="Quick Start"
          title="Get up and running within minutes"
          offset={1}
        />

        <div className="row">
          <div className="col col--5 col--offset-1">
            <p>
              Use the following commands as root to get the swizzin installer up and running.
              Depending on your choice of packages and your CPU, you can have your applications
              up and running within just a few minutes!
            </p>

            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.button
              )}
              href="https://github.com/liaralabs/swizzin/blob/master/CHANGELOG.md"
            >
              <FiGithub size={24} /> Changelog
            </Link>
          </div>

          <div className="col col--5">
          {installmethod && installmethod.length && (
                <Tabs defaultValue={installmethod[0].label} values={installmethod.map((props, idx) => {
                  return {label:props.label, value:props.label};
                })}>
                  {installmethod.map((props, idx) => (
                    <TabItem value={props.label}>
                      <CodeSnippet code={props.cmd} lang="bash"></CodeSnippet>
                    </TabItem>
                  ))}
                </Tabs>
          )}
              <div className={styles.platforms}>
              <h3>Supported Platforms</h3>
              <div>
                <DiDebian size={size} />
                <DiUbuntu size={size} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickStart;
