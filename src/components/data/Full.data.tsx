import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const FullData: FC = () => {
    return(
        <GuideContainer>
            <h3 id="full-data">Full GraphQL Object</h3>

            <p>
                The following is the full GraphQL structure. In most scenarios, you won't need the entire object, however,
                if you do want the entire metadata of each Arweave block. You could retrieve it by using the following query.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
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
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}