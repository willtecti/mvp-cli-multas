import { createGlobalStyle } from 'styled-components';
import {white} from './colors'

import "font-awesome/css/font-awesome.css";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: ${white};
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

@keyframes gira {
  to {
      transform: rotate(360deg);
  }
}
`;

