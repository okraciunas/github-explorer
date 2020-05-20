import { createGlobalStyle } from 'styled-components'

import githubBackground from './../assets/svg/github-background.svg'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f5;
    background: url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
