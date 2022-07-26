import React from "react";
import styled from 'styled-components';
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
