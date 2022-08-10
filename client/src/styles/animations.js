import { css } from "styled-components";

const animations = css`
    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100%{
            transform: rotate(360deg);
        }
    }
`;

export default animations;