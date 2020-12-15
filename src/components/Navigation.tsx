import { FC } from 'react';
import { NavigationContainer } from './styles/Navigation.style';

export const Navigation: FC = () => {
    return(
        <NavigationContainer>
            <a className="link" href="#data-structures">
                Data Structures
            </a>
                <a className="link standard" href="#transaction-data-structures">
                    Transaction Structures
                </a>
                    <a className="link mini" href="#full-data">
                        Full GraphQL Object
                    </a>
                    <a className="link mini" href="#tx-id">
                        Transaction IDs
                    </a>
                    <a className="link mini" href="#arweave-tags">
                        Arweave Tags
                    </a>
                    <a className="link mini" href="#block-metadata">
                        Block Metadata
                    </a>
                    <a className="link mini" href="#payment-data">
                        Payment Data
                    </a>
                <a className="link standard" href="#block-data-structures">
                    Block Structures
                </a>
                    <a className="link mini" href="#full-block-data">
                        Full GraphQL Object
                    </a>

            <div className="spacer"></div>

            <a className="link" href="#query-structures">
                Query Structures
            </a>
                <a className="link standard" href="#transaction-query-structures">
                    Transaction Structures
                </a>
                    <a className="link mini" href="#pagination">
                        Pagination
                    </a>
                    <a className="link mini" href="#transaction">
                        By Transaction ID
                    </a>
                    <a className="link mini" href="#recipients">
                        By Recipients
                    </a>
                    <a className="link mini" href="#owners">
                        By Owners
                    </a>
                    <a className="link mini" href="#tags">
                        By Tags
                    </a>
                    <a className="link mini" href="#blockheight">
                        By Block Height
                    </a>
                    <a className="link mini" href="#sorting">
                        Sorting
                    </a>
                <a className="link standard" href="#block-query-structures">
                    Block Structures
                </a>
                    <a className="link mini" href="#block-pagination">
                        Pagination
                    </a>
                    <a className="link mini" href="#block-ids">
                        By Block ID
                    </a>
                    <a className="link mini" href="#block-range">
                        Block Range
                    </a>
                    <a className="link mini" href="#block-sorting">
                        Sorting
                    </a>
        </NavigationContainer>
    )
}