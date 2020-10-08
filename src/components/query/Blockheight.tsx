import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const Blockheight: FC = () => {
    return(
        <GuideContainer>
            <h3 id="blockheight">By Block Height</h3>

            <p>
                If you wanted to retrieve transactions from certain block numbers. You can specify a range. The following is an example
                of how to retrieve all transactions from genesis to block #10.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions(block: {min: 0, max: 10}) {
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