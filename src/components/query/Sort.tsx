import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

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
    transactions(sort: HEIGHT_ASC) {
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
                If you wish to sort transactions by block height, you may specify the sort order with HEIGHT_DESC or HEIGHT_ASC.
            </p>

            <p>
                HEIGHT_DESC orders them in descending order, with the most recent and unconfirmed/pending transactions appearing first:
            </p>


            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.sq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text1} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="sq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text1}
            </SyntaxHighlighter>

            <div className="space"/>

            <p>
                HEIGHT_ASC orders them in ascending order (oldest first):
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.sq2-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text2} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="sq2-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text2}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}