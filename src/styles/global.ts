import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
    border-radius: 4px;
  }

  body {
    background: ${({ theme }) => theme.colors["dark-400"]};
    color: ${({ theme }) => theme.colors["light-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button  {
    font: 400 1.6rem Roboto, sans-serif;
    color: ${({ theme }) => theme.colors["light-100"]};
  }
`