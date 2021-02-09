import styled from 'styled-components';

export const TitleContainer = styled.div`
    div.heading {
        display: flex;
        align-items: center;
        height: 180px;
        padding: 0 0 0 70px;

        img {
            height: 96px;
            margin: 0 15px 0 0;
        }

        h1 {
            font-size: 32px;
            font-weight: bold;
        }
        
        @media (max-width: 740px) {
            justify-content: center;
            padding: 0;

            img {
                height: 60px;
                margin: 0 5px 0 0;
            }

            h1 {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
`;