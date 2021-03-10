import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text1 = `query {
    transactions(
        tags: {
            name: "Content-Type",
            values: ["text/html"]
        }
    ) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Text2 = `query {
    transactions(
        tags: [
            {
                name: "Content-Type",
                values: ["text/html"]
            },
            {
                name: "User-Agent",
                values: ["ArweaveAutoDPL/0.1"]
            }
        ]
    ) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Tags: FC = () => {
    return(
        <GuideContainer>
            <h3 id="tags">By Tags</h3>

            <p>
                You may retrieve transactions via tag name/value pairs.
            </p>

            <p>
                To look up transactions by a single tag, you may structure your query as follows:
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.tq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text1} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="tq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text1}
            </SyntaxHighlighter>

            <div className="space"/>

            <p>
                Alternatively, look up transactions using multiple tags like so:
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.tq2-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text2} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="tq2-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text2}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}