import React from "react";
import styled from 'styled-components';
import SearchBar from "../SearchBar";
import Logo, { LogoStyled } from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <SearchBar />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  & > ${LogoStyled} {
    flex: 1;
  }
`;

export default Header;
