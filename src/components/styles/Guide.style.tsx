import styled from 'styled-components';

export const GuideContainer = styled.div`
    padding: 0 0 90px 0;

    h3 {
        font-size: 18px;
        font-weight: bold;
        padding: 0 0 15px 0;
    }

    p {
        font-size: 16px;
        padding: 0 0 15px 0;
    }

    div.space { height: 45px; }

    div.copy-button {
        position: relative;
        z-index: 11;
        button {
            position: absolute;
            right: 15px;
            top: 45px;
        }
    }
`;