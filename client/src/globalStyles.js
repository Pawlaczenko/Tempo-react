import { createGlobalStyle } from "styled-components";

import backgroundImage from "./assets/images/background.svg";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&family=Roboto+Mono:wght@200&family=Source+Sans+Pro:wght@700&display=swap');

    html {
        --color-primary: '#F79D75';
        --color-secondary: '#6A7588';
        --color-grey: '#BFC0C0';
        --color-background: '#BFC0C0';
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: url(${backgroundImage});
        background-size: cover;
        font-family: 'Montserrat', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;