import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const Tags: FC = () => {
    return(
        <GuideContainer>
            <h3 id="tags">By Tags</h3>

            <p>
                You can retrieve transactions by via tags. In the case of just retrieving by a single tag. You can structure your query
                as follows.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
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
}`}
            </SyntaxHighlighter>

            <div className="space"/>

            <p>
                If you want to retrieve by multiple tags. You can structure your query this way.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
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
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}