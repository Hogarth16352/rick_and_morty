import { createGlobalStyle } from 'styled-components';
import title from "../title.png"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: black;
    background-image: url(${title});
    background-size: 25%;
    height: 20px;
    margin: 20px;
    background-position: center top;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
`

export default GlobalStyles;