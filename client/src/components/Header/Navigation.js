import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <Wrapper>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/about">About</NavigationItem>
        <NavigationItem path="/myWork">My Work</NavigationItem>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    display: flex;
    gap: 2.5rem;
`;

export default Navigation