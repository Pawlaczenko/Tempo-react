import { css } from "styled-components";

const variables = css`
    :root {
        --base-color-primary: 18, 89%;
        --color-primary: hsla(var(--base-color-primary), 70%, 100%);

        --base-color-secondary: 218, 12%;
        --color-secondary: hsla(var(--base-color-secondary),47%,100%);

        --base-color-grey: 180, 1%;
        --color-grey: hsla(var(--base-color-grey),75%,100%);

        --base-color-background: 0,0%;
        --color-background: hsla(var(--base-color-background),95%,80%);
    }
`;

export default variables;