import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: Roboto, sans-serif;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
    label{
        font-size: 1.6rem;
    }
    .pageContent{
        max-width: 90%;
        margin: 0 auto;
    }
    input{
      font-size: 1.5rem;
    }
    textarea{
      font-size: 1.5rem;
    }
  }
  ${normalize}
`;
