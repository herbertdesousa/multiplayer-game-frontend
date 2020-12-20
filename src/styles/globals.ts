import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #121214;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 strong {
    font-weight: 600;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
  }

  button {
    cursor: pointer;

    outline: 0;
    border: 0;
  }
`;
