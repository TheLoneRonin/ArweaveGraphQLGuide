import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../components/styles/Container';
import { Title } from '../components/Title';
import { Navigation } from '../components/Navigation';

import { FullData } from '../components/data/Full.data';
import { BlockID } from '../components/data/Block.id';
import { ArweaveTags } from '../components/data/Arweave.tags';
import { BlockMetadata } from '../components/data/Block.metadata';
import { PaymentData } from '../components/data/Payment.data';
import { BlockFullData } from '../components/data/Block.full.data';

import { Pagination } from '../components/query/Pagination';
import { Transaction } from '../components/query/Transaction';
import { Recipients } from '../components/query/Recipients';
import { Owners } from '../components/query/Owners';
import { Tags } from '../components/query/Tags';
import { Blockheight } from '../components/query/Blockheight';
import { Sort } from '../components/query/Sort';
import { BlockPagination } from '../components/query/Block.pagination';
import { Block } from '../components/query/Block';
import { BlockRange } from '../components/query/Block.range';
import { BlockSort } from '../components/query/Block.sort';

export const Index: FC = () => {
    return (
        <Container>
            <Head>
                <title>Arweave GraphQL Guide</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="description" content={`An interactive and comprehensive Arweave GraphQL Guide`}/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={`Arweave GraphQL Guide`}/>
                <meta name="twitter:description" content={`An interactive and comprehensive Arweave GraphQL Guide`}/>

                <meta property="og:title" content={`Arweave GraphQL Guide`}/>
                <meta property="og:image" content="https://gql-guide.vercel.app/preview.png"/>
                <meta property="og:description" content={`An interactive and comprehensive Arweave GraphQL Guide`}/>

                <link rel="icon" type="image/jpg" href={require('../components/image/logo.jpg')}/>
            </Head>
            <div className="content">
                <Navigation/>
                <div className="content-panel">
                    <Title/>
                    <h2 id="introduction">Introduction</h2>

                    <p>
                        This guide is intended as a reference for developer's interested in leveraging Arweave GraphQL endpoints, 
                        e.g. <a href="https://arweave.net/graphql">arweave.net/graphql</a>. GraphQL endpoints are currently
                        the most robust method of querying for transaction/block metadata on Arweave.
                    </p>

                    <h2 id="data-structures">Data Structures</h2>

                    <p>
                        The Data Structures section describes the anatomy of queries. There are several examples
                        that provide context on how to traverse GraphQL. If you want to learn about the GraphQL 
                        structure at a more granular level, check out the <a href="https://arweave.dev/graphql">arweave.dev/graphql</a> Docs tab.
                    </p>

                    <h3 className="lg" id="transaction-data-structures">Transaction Structures</h3>

                    <FullData/>
                    <BlockID/>
                    <ArweaveTags/>
                    <BlockMetadata/>
                    <PaymentData />
                    
                    <h3 className="lg" id="block-data-structures">Block Structures</h3>

                    <BlockFullData />

                    <h2 id="query-structures">Query Structures</h2>

                    <p>
                        The Query Structures section describes the ways in which you may retrieve transactions and blocks with GraphQL. The examples
                        provided may be demoed on <a href="https://arweave.dev/graphql">arweave.dev/graphql</a> by copy and pasting
                        the provided example queries.
                    </p>

                    <h3 className="lg" id="transaction-query-structures">Transaction Structures</h3>

                    <Pagination/>
                    <Transaction/>
                    <Recipients/>
                    <Owners/>
                    <Tags/>
                    <Blockheight/>
                    <Sort />
                    
                    <h3 className="lg" id="block-query-structures">Block Structures</h3>

                    <BlockPagination />
                    <Block />
                    <BlockRange />
                    <BlockSort />
                    
                </div>
            </div>
        </Container>
    );
}

export default Index;