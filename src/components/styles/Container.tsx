import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 1024px;
    margin: auto;

    font-family: 'Work Sans', 'monospace';

    div.content {
        display: flex;

        div.content-panel {
            width: 100%;
            padding: 15px 15px 15px 255px;

            h2 {
                font-size: 24px;
                font-weight: bold;
                padding: 0 0 15px 0;
            }

            p {
                font-size: 16px;
                padding: 0 0 15px 0;
            }

            a {
                color: blue;
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 740px) {
        div.content {
            display: block;

            div.content-panel {
                padding: 15px;
            }
        }
    }
`;