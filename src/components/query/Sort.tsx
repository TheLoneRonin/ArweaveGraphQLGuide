import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const Sort: FC = () => {
    return(
        <GuideContainer>
            <h3 id="sorting">Sorting</h3>

            <p>
                If you need to sort transactions by blockheight. You can use the sort key with HEIGHT_DESC and HEIGHT_ASC.
                HEIGHT_DESC orders them in descending order (newest first).
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions(sort: HEIGHT_DESC) {
        edges {
            node {
                id
            }
        }
    }
}`}
            </SyntaxHighlighter>

            <div className="space"/>

            <p>
                HEIGHT_ASC orders them in ascending order (oldest first).
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions(sort: HEIGHT_ASC) {
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