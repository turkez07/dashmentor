import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Sora', Helvetica, Sans-Serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html {
    font-size: 62.5%; // 1rem = 10px
    height: 100%;
    font-family: 'Sora', 'Inter', Helvetica, Arial, sans-serif;
    background: #191919;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  button, input {
    font-family: 'Sora', 'Inter', Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
  }

  body {
    height: auto;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
  }

  body, #root {
    min-height: 100vh;
    position: relative;
    
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  input, div, li, button, a, textarea, select {
    -webkit-tap-highlight-color: transparent; 
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
  }

  button {
    cursor: pointer;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
`;

export default GlobalStyle;
