import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions {
        edges {
            node {
                block {
                    id
                    timestamp
                    height
                    previous
                }
            }
        }
    }
}`;

export const BlockMetadata: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-metadata">Block Metadata</h3>

            <p>
                If you ever needed to know specific details about the transaction's block. You can retrieve it's block number
                mining date, block hash and the previous block hash.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.bm-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }}  className="bm-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}