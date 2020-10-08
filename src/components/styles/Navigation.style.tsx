import styled from 'styled-components';

export const NavigationContainer = styled.div`
    position: fixed;
    width: 100%;
    max-width: 240px;
    border-left: 2px solid #D8D8D8;

    a.link {
        display: flex;
        align-items: center;
        font-size: 18px;
        width: 100%;
        padding: 0 0 0 15px;
        height: 50px;
        cursor: pointer;

        &.mini {
            height: 40px;
            font-size: 16px;
            padding: 0 0 0 30px;
        }
    }

    div.spacer { height: 30px; }
`;