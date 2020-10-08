import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const Transaction: FC = () => {
    return(
        <GuideContainer>
            <h3 id="transaction">By Transaction ID</h3>

            <p>
                You can retrieve one, or multiple transactions by specifying their ids in an array.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions(ids: ["G-1t0Lqysin897HC3IV8xu_Mr884B-Mo5YEnlhUH54k"]) {
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