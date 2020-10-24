import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeSnippet from '@theme/CodeSnippet';

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
                <CodeSnippet code={props.cmd} lang="bash"></CodeSnippet>
                </TabItem>
            ))}
            </Tabs>
        )}
      </>
    );
}

export default InstallCmd;
