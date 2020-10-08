import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

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
                Sometimes, you might need to see the tags that are part of the Arweave transaction. In this
                example you can retrieve both the tag name and the value as an array.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('input.at-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <input type="text" value={Text} style={{ display: 'none' }} className="at-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}