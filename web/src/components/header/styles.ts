import styled from 'styled-components';

export const Container = styled.header`
    margin-top: 48px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    nav {
      display:flex;
      height:34px;

      a {
        color: var(--title-color);
        font-weight: bold;
        text-decoration: none;
        font-size:18px;
        height:100%;
        transition: all .4s;

        display: flex;
        align-items: center;

        &:nth-child(2) {
          margin:0 20px;
        }

        &:hover {
          color: var(--primary-color);
          transform:scale(1.1);
            font-weight: bold;
        }

        svg {
          margin-right: 16px;
          color: var(--primary-color);
        }
      }

      .active {        
        color: var(--primary-color);
        transform:scale(1.1);
      }
    }
`;