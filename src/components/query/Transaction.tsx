import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions(ids: ["G-1t0Lqysin897HC3IV8xu_Mr884B-Mo5YEnlhUH54k"]) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Transaction: FC = () => {
    return(
        <GuideContainer>
            <h3 id="transaction">By Transaction ID</h3>

            <p>
                You can retrieve one, or multiple transactions by specifying their ids in an array.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.txq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="txq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}