import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text1 = `query {
    blocks(sort: HEIGHT_DESC) {
      edges {
        cursor
        node {
            id
            timestamp
            height
            previous  
        }
      }
    }
}`;

export const Text2 = `query {
    blocks(sort: HEIGHT_ASC) {
      edges {
        cursor
        node {
            id
            timestamp
            height
            previous  
        }
      }
    }
}`;

export const BlockSort: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-sorting">Sorting</h3>

            <p>
                If you wish to sort blocks by block height, you may specify the sort order with HEIGHT_DESC or HEIGHT_ASC.
            </p>

            <p>
                HEIGHT_DESC orders them in descending order, with the most recent blocks appearing first:
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.sqr-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text1} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="sqr-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
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
                        const el: any = document.querySelector('textarea.sqr2-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text2} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="sqr2-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text2}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}