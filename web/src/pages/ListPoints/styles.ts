import styled from 'styled-components';

export const Container = styled.main`
    max-width:1100px;
    margin:0 auto;
    
    main {         
        margin:80px auto 20px auto;
        padding: 64px;
        max-width: 730px;
        background: #FFF;
        border-radius: 8px;
        box-shadow: 0 0 14px #3333332e;
        display: flex;
        flex-direction: column;        
    }

    ul {         
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        list-style: none;
        margin-top:20px;

        li {
            background: #ccc;
            border: 2px solid #f5f5f5;
            min-height: 180px;
            border-radius: 8px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: all .5s;

            h1 {
                font-size:25px;
            }

            #city {
                color: var(--title-color);
                margin-top:3px;
            }

            #items {
                color: var(--text-color);
                margin-top:10px;
            }
            
            &:hover {      
                transform:scale(1.1);
                background: #E1FAEC;
                border: 2px solid #34CB79;
            }

            span {
                flex: 1;
                margin-top: 12px;
                display: flex;
                align-items: center;
                color: var(--title-color);
            }

            &.selected {
                background: #E1FAEC;
                border: 2px solid #34CB79;
            }
        }
    }
`;