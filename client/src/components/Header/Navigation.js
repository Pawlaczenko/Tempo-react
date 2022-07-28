import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem';

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
`;

export default Navigation