import styled from 'styled-components';

export const Container = styled.main`
    max-width:1100px;
    margin:0 auto;
    padding: 0 30px;

    main {
        height:calc(89vh - 63px);

        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        .check-icon {
            font-size:75px;
            color: var(--primary-color);
        }

        h1 {
            font-size:40px;
            margin: 10px 0 5px 0;
        }

        a {
            color:var(--title-color);
            text-decoration: none;
            font-weight:bold;
            transition: all .4s;

            display:flex;
            align-items:center;
            
            svg {
                margin-right:5px;
            }

            &:hover {
                color: var(--primary-color);
            }
        }
    }
`;