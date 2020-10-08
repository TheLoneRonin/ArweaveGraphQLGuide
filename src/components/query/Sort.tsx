import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';

export const Text1 = `query {
    transactions(sort: HEIGHT_DESC) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Text2 = `query {
    transactions(sort: HEIGHT_DESC) {
        edges {
            node {
                id
            }
        }
    }
}`;

export const Sort: FC = () => {
    return(
        <GuideContainer>
            <h3 id="sorting">Sorting</h3>

            <p>
                If you need to sort transactions by blockheight. You can use the sort key with HEIGHT_DESC and HEIGHT_ASC.
                HEIGHT_DESC orders them in descending order (newest first).
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('input.sq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <input type="text" value={Text1} style={{ display: 'none' }} className="sq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text1}
            </SyntaxHighlighter>

            <div className="space"/>

            <p>
                HEIGHT_ASC orders them in ascending order (oldest first).
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('input.sq2-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <input type="text" value={Text2} style={{ display: 'none' }} className="sq2-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text2}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}