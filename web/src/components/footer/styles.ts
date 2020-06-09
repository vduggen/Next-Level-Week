import styled from 'styled-components';

export const Container = styled.footer`
    margin-bottom:20px;
    width:100%;

    display:flex;
    justify-content: center;
    
    p {
        display:flex;
        
        a {
            margin-left:5px;
            color: var(--primary-color);
            text-decoration:none;
        }
    }
`;