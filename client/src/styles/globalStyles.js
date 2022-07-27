import { createGlobalStyle } from "styled-components";

import backgroundImage from "../assets/images/background.svg";
import reset from "./reset";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&family=Roboto+Mono:wght@200&family=Source+Sans+Pro:wght@700&display=swap');

    ${variables}

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: url(${backgroundImage});
        background-size: cover;
        font-family: 'Montserrat', sans-serif;
    }

    ${reset}
`;

export default GlobalStyle;