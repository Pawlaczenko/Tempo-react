import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins'

const PaginationItem = ({handleClick,current,children}) => {
  return (
    <StyledPaginationItem current={current} onClick={handleClick}>{children}</StyledPaginationItem>
  )
}

const StyledPaginationItem = styled.li`
    --itemSize: 3rem;
    width: var(--itemSize);
    height: var(--itemSize);
    ${flexCenter};

    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;

    background-color: ${props => props.current ? "var(--color-primary)" : "none"};
    color: ${props => props.current ? "white" : "black"};

    &:hover {
        background-color: var(--color-primary);
        color: white;
    }
`;

export default PaginationItem