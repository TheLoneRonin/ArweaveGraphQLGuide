import styled from 'styled-components';

export const NavigationContainer = styled.div`
    position: fixed;
    width: 100%;
    max-width: 320px;
    padding: 40px 0;

    a.link {
        display: flex;
        font-weight: 600;
        align-items: center;
        font-size: 18px;
        width: 100%;
        padding: 0 0 0 15px;
        height: 30px;
        cursor: pointer;
        
        &.standard {
            height: 30px;
            font-size: 16px;
            font-weight: 300;
            padding: 0 0 0 30px;
        }
        
        &.mini {
            height: 25px;
            font-size: 14px;
            font-weight: 300;
            padding: 0 0 0 45px;
        }
    }

    div.spacer { height: 30px; }

    @media (max-width: 740px) {
        position: static;
        max-width: 100%;
        margin: 15px;
    }
`;