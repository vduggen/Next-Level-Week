import styled from 'styled-components';

export const Container = styled.main ` width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  form {
    margin:80px auto 20px auto;
    padding: 64px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0 0 14px #3333332e;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 36px;
    }

    fieldset {
      margin-top: 64px;
      min-inline-size: auto;
      border: 0;
    }

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      h2 {
        font-size: 24px;
      }

      span {
        font-size: 14px;
        font-weight: normal;
        color: var(--text-color);
      }
    }

    .field-group {
      flex: 1;
      display: flex;
    }

    .field {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;

      input {

        &[type=text],
        &[type=email],
        &[type=number] {
          flex: 1;
          background: #F0F0F5;
          border-radius: 8px;
          border: 0;
          padding: 16px 24px;
          font-size: 16px;
          color: #6C6C80;
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6C6C80;
      }

      input::placeholder {
        color: #A0A0B2;
      }

      label {
        font-size: 14px;
        margin-bottom: 8px;
      }

      :disabled {
        cursor: not-allowed;
      }
    }

    .field-group {

      .field+.field,
      input+input {
        margin-left: 24px;
      }
    }

    .field-check {
      flex-direction: row;
      align-items: center;

      input[type=checkbox] {
        background: #F0F0F5;
      }

      label {
        margin: 0 0 0 8px;
      }
    }

    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    button {
      width: 260px;
      height: 56px;
      background: var(--primary-color);
      border-radius: 8px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      align-self: flex-end;
      margin-top: 40px;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background: #2FB86E;
      }
    }
  }
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;

    li {
      background: #ccc;
      border: 2px solid #f5f5f5;
      height: 180px;
      border-radius: 8px;
      padding: 32px 24px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      cursor: pointer;
      transition: all .5s;
      
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