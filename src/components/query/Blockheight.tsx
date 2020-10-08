import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions(block: {min: 0, max: 10}) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Blockheight: FC = () => {
    return(
        <GuideContainer>
            <h3 id="blockheight">By Block Height</h3>

            <p>
                If you wanted to retrieve transactions from certain block numbers. You can specify a range. The following is an example
                of how to retrieve all transactions from genesis to block #10.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.bhq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }}  className="bhq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}