import React from 'react'
import styled from 'styled-components'
import NavigationItem,{StyledLink} from './NavigationItem';
import { BREAKPOINTS, PORTFOLIO_LINK } from '../../constants';

const Navigation = () => {
  return (
    <StyledNavigation>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/about">About</NavigationItem>
        <StyledLink href={PORTFOLIO_LINK} target="_blank">My Work</StyledLink>
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