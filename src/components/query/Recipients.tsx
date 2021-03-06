import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions(recipients:["M6w588ZkR8SVFdPkNXdBy4sqbMN0Y3F8ZJUWm2WCm8M"]) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Recipients: FC = () => {
    return(
        <GuideContainer>
            <h3 id="recipients">By Recipients</h3>

            <p>
                You may retrieve one or more recipients by specifying their address(es) in an array.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.rq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="rq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}