import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const PaymentData: FC = () => {
    return(
        <GuideContainer>
            <h3 id="payment-data">Payment Data</h3>

            <p>
                If the data you're retrieving is payment related. You can retrieve the mining fee, the amount paid as well as who
                received the AR and the address that sent the AR.
            </p>

            <SyntaxHighlighter language="graphql" style={dark}>
{`query {
    transactions {
        edges {
            node {
                id
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
            }
        }
    }
}`}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}