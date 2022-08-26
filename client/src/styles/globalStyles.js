import { createGlobalStyle } from "styled-components";

import backgroundImage from "../assets/images/background.svg";
import reset from "./reset";
import variables from "./variables";
import animations from "./animations";

const GlobalStyle = createGlobalStyle`
    ${variables}
    ${animations}

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

    .react-icons {
        vertical-align: middle;
        display: inline;
    }

    ${reset}
`;

export default GlobalStyle;