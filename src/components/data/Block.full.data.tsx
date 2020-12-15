import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    blocks {
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

export const BlockFullData: FC = () => {
    return(
        <GuideContainer>
            <h3 id="full-block-data">Full GraphQL Object</h3>

            <p>
                The following is the full GraphQL structure. In most scenarios, you won't need the entire object, however,
                if you do want the entire metadata of each Arweave block. You could retrieve it by using the following query.
                Please keep in mind the Arweave block queried does not contain transaction metadata.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.bfd-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="bfd-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}