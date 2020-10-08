import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

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

export const Pagination: FC = () => {
    return(
        <GuideContainer>
            <h3 id="pagination">Pagination</h3>

            <p>
                There are three components to paginating queries. First, when you retrieve the GraphQL object. You need to make sure to retrieve
                the cursor. The cursor is used to paginate after said edge. Second, you can specify the amount of elements to output by using the
                first key. When first is 5, it outputs 5 transaction. And finally, the after key is used in conjunction with the cursor. This will
                output transactions after the transaction.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('input.pq-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <input type="text" value={Text} style={{ display: 'none' }} className="pq-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={dark}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}