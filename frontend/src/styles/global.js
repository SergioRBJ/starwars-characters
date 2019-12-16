import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/starwars-bg.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${background}) no-repeat center center fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body, input, button {
    font: 14px  Roboto,sans-serif;
  }

  #root {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
