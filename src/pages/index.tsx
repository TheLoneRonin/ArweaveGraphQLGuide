import { FC } from 'react';

import { Container } from '../components/styles/Container';
import { Title } from '../components/Title';
import { Navigation } from '../components/Navigation';

import { FullData } from '../components/data/Full.data';
import { BlockID } from '../components/data/Block.id';
import { ArweaveTags } from '../components/data/Arweave.tags';
import { BlockMetadata } from '../components/data/Block.metadata';
import { PaymentData } from '../components/data/Payment.data';

import { Pagination } from '../components/query/Pagination';
import { Transaction } from '../components/query/Transaction';
import { Recipients } from '../components/query/Recipients';
import { Owners } from '../components/query/Owners';
import { Tags } from '../components/query/Tags';
import { Blockheight } from '../components/query/Blockheight';
import { Sort } from '../components/query/Sort';

export const Index: FC = () => {
    return (
        <Container>
            <Title/>
            <div className="content">
                <Navigation/>
                <div className="content-panel">
                    <h2 id="data-structures">Data Structures</h2>
                    <p>
                        The Data Structures section describes the anatomy of queries. There are several examples
                        that provide context on how to traverse GraphQL. If you want to learn about the GraphQL 
                        structure at a more granular level. Check out the <a href="https://arweave.dev/graphql">arweave.dev/graphql</a> Docs tab.
                    </p>

                    <FullData/>
                    <BlockID/>
                    <ArweaveTags/>
                    <BlockMetadata/>
                    <PaymentData/>

                    <h2 id="query-structures">Query Structures</h2>
                    <p>
                        The Query Structures section describes how you can retrieve transactions and blocks with GraphQL. The examples
                        provided can actually be demoed on <a href="https://arweave.dev/graphql">arweave.dev/graphql</a> by copy and pasting
                        the example queries.
                    </p>

                    <Pagination/>
                    <Transaction/>
                    <Recipients/>
                    <Owners/>
                    <Tags/>
                    <Blockheight/>
                    <Sort/>
                </div>
            </div>
        </Container>
    );
}

export default Index;