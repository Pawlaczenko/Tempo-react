import {css} from 'styled-components';

export const absoluteCenter = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ellipsis = (rows) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${rows || 1};
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const fadeInAnimation = (delay) => css`
    animation: fadeIn .3s ease-in-out ${delay || 0}s backwards;
`;