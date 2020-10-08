import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const ArweaveTags: FC = () => {
    return(
        <GuideContainer>
            <h3 id="arweave-tags">Arweave Tags</h3>

            <p>
                Sometimes, you might need to see the tags that are part of the Arweave transaction. In this
                example you can retrieve both the tag name and the value as an array.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
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
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}