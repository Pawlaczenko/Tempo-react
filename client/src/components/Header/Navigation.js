import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem';
import { BREAKPOINTS } from '../../constants';

const Navigation = () => {
  return (
    <StyledNavigation>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/about">About</NavigationItem>
        <NavigationItem path="/myWork">My Work</NavigationItem>
    </StyledNavigation>
  )
}

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    font-size: 2rem;

    @media only screen and (${BREAKPOINTS.burger}){
      flex-direction: column;
      font-size: 3rem;
  }
`;

export default Navigation