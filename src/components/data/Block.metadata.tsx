import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const BlockMetadata: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-metadata">Block Metadata</h3>

            <p>
                If you ever needed to know specific details about the transaction's block. You can retrieve it's block number
                mining date, block hash and the previous block hash.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
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
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}