import { css } from "styled-components";

const variables = css`
    :root {
        // COLORS
        --base-color-primary: 18, 89%;
        --color-primary: hsla(var(--base-color-primary), 70%, 100%);
        --color-primary-opace: hsla(var(--base-color-primary), 70%, 30%);
        --color-primary-dark: hsla(var(--base-color-primary), 60%, 100%);

        --base-color-secondary: 218, 12%;
        --color-secondary: hsla(var(--base-color-secondary),47%,100%);

        --base-color-grey: 180, 1%;
        --color-grey-light: hsla(var(--base-color-grey),75%,100%);
        --color-grey-lightest: hsla(var(--base-color-grey),85%,100%);
        --color-grey-dark: hsla(var(--base-color-grey),50%,100%);
        --color-grey-darker: hsla(var(--base-color-grey),40%,100%);

        --base-color-background: 0,0%;
        --color-background: hsla(var(--base-color-background),95%,80%);

        --color-warning: hsl(352, 74%, 57%);
        --color-correct: hsl(136, 82%, 50%);

        //GENERAL STYLES
        --shadow-light: 0 1px 4px 0 rgba(0,0,0,.2);
    }
`;

export default variables;