import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';

export const Text = `query {
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
}`;

export const PaymentData: FC = () => {
    return(
        <GuideContainer>
            <h3 id="payment-data">Payment Data</h3>

            <p>
                If the data you're retrieving is payment related. You can retrieve the mining fee, the amount paid as well as who
                received the AR and the address that sent the AR.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.pd-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="pd-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}