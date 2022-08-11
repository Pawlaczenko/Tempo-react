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

export const ellipsis = css`
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.rows || 1};
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;