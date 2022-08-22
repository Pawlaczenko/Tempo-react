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

    @keyframes blink {
        0%{
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

export default animations;