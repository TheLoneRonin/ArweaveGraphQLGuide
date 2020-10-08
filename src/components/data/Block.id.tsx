import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const BlockID: FC = () => {
    return(
        <GuideContainer>
            <h3 id="tx-id">Transaction IDs</h3>

            <p>
                Probably the most common use of GraphQL would be to retrieve Transaction IDs. Once you retrieve the Transaction ID 
                you can then pull the actual data from the block using the Arweave.js library's "getData()" function.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions {
        edges {
            node {
                id
            }
        }
    }
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}