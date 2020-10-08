import { FC } from 'react';
import { TitleContainer } from './styles/Title.style';

export const Title: FC = () => {
    return(
        <TitleContainer>
            <div className="heading">
                <img src={require('./image/logo.jpg')}/>
                <h1>Arweave GraphQL Guide</h1>
            </div>
        </TitleContainer>
    )
}