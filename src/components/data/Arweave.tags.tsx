import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions {
        edges {
            node {
                id
                tags {
                    name
                    value
                }
            }
        }
    }
}`;

export const ArweaveTags: FC = () => {
    return(
        <GuideContainer>
            <h3 id="arweave-tags">Arweave Tags</h3>

            <p>
                Sometimes, you may need to access the tags embedded in a given Arweave transaction. 
                In this example you can retrieve both the tag name and the value as an array.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.at-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }}  className="at-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}