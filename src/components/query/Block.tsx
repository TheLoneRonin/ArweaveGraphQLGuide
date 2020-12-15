import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    blocks(ids: ["J08jRl2S5X0a-wF9bnLvsD_MgEsWpBMttBOWgxpiAdtbi75_HCFCg1M-necyFSD4"]) {
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

export const Block: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-ids">By Block ID</h3>

            <p>
                You can retrieve one or multiple blocks by specifying the "ids" parameter by specifying each
                block id in an array.                 
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.btxq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="btxq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}