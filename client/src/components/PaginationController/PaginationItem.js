import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins'

const PaginationItem = ({handleClick,current,children, disabled}) => {
  return (
    <StyledPaginationItem current={current} onClick={handleClick}>
      <StyledPaginationButton disabled={disabled}>{children}</StyledPaginationButton>
    </StyledPaginationItem>
  )
}

const StyledPaginationItem = styled.li`
    --itemSize: 3rem;
    width: var(--itemSize);
    height: var(--itemSize);
    border-radius: 5px; 

    background-color: ${props => props.current ? "var(--color-primary)" : "none"};
    color: ${props => props.current ? "white" : "black"};
`;

const StyledPaginationButton = styled.button`
  width: 100%;
  height: 100%;
  ${flexCenter};
  cursor: pointer;

  font-weight: 700;
  background-color: transparent;
  border: none;
  border-radius: inherit;

  &:hover:not([disabled]) {
      background-color: var(--color-primary);
      color: white;
  }

  &:disabled {
    cursor: initial;
  }
`;

export default PaginationItem