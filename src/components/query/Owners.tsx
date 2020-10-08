import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const Owners: FC = () => {
    return(
        <GuideContainer>
            <h3 id="owners">By Owners</h3>

            <p>
                You can retrieve one, or multiple owners of transactions by specifying their address in an array.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions(owners:["M6w588ZkR8SVFdPkNXdBy4sqbMN0Y3F8ZJUWm2WCm8M"]) {
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