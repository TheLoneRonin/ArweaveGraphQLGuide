import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    blocks(height: {
      min: 587540,
      max: 587550
    }) {
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

export const BlockRange: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-range">Block Range</h3>

            <p>
                You can utilize the height parameter with a "min" and "max" value. It will return blocks within that specific
                range. The following is an example that retrieves blocks 587540 to 587550.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.bqr-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="bqr-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}