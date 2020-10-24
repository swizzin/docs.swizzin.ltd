import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeSnippet from '@theme/CodeSnippet';
import CodeBlock from '@theme/CodeBlock';

const installmethod = [
    {
        label: "curl",
        cmd: "bash <(curl -sL https://git.io/swizzin-setup)",
    },
    {
        label: "wget",
        cmd: "bash <(wget -O- -q https://git.io/swizzin-setup)",
    }
]
function InstallCmd() {
    return (
      <>
        {installmethod && installmethod.length && (
            <Tabs defaultValue={installmethod[0].label} values={installmethod.map((props, idx) => {
            return {label:props.label, value:props.label};
            })}>
            {installmethod.map((props, idx) => (
                <TabItem value={props.label}>
                <div className="code">
                <CodeBlock children={props.cmd} className={`bash`}></CodeBlock>
                </div>
                </TabItem>
            ))}
            </Tabs>
        )}
      </>
    );
}

export default InstallCmd;
