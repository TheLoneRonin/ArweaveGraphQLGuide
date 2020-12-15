import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions(first: 5, after: "WyIyMDIwLTA5LTIzVDE2OjQ0OjE0LjY5MloiLDFd") {
        edges {
            cursor
            node {
                id
            }
        }
    }
}`;

export const BlockPagination: FC = () => {
    return(
        <GuideContainer>
            <h3 id="block-pagination">Pagination</h3>

            <p>
                Applying the cursor to the "after" parameter. You can retrieve blocks that were submitted after said block.
                Keep in mind that if you are sorting by a HEIGHT_ASC. The blocks retrieved will be blocks prior to said block.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.bpq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className="bpq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}