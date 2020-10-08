import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions {
        cursor
        edges {
            node {
                id
                anchor
                signature
                recipient
                owner {
                    address
                    key
                }
                fee {
                    winston
                    ar
                }
                quantity {
                    winston
                    ar
                }
                data {
                    size
                    type
                }
                tags {
                    name
                    value
                }
                block {
                    id
                    timestamp
                    height
                    previous
                }
                parent {
                    id
                }
            }
        }
    }
}`

export const FullData: FC = () => {
    return(
        <GuideContainer>
            <h3 id="full-data">Full GraphQL Object</h3>

            <p>
                The following is the full GraphQL structure. In most scenarios, you won't need the entire object, however,
                if you do want the entire metadata of each Arweave block. You could retrieve it by using the following query.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('input.fd-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <input type="text" value={Text} style={{ display: 'none' }} className="fd-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}