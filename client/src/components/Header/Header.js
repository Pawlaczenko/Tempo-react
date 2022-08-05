import React, {useState} from "react";
import styled from 'styled-components';
import SearchBar from "../SearchBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { breakpoints } from '../../constants';
import Burger from "./Burger";

function Header() {
  const [isOpen, toggleOpen] = useState(false);

  const handleMenuOpen = () => toggleOpen(!isOpen);

  return (
    <Wrapper>
      <Logo />
      <Burger isOpen={isOpen} handleClick={handleMenuOpen} />
      <SideMenu>
        <Navigation />
        <SearchBar />
      </SideMenu>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SideMenu = styled.div`
  display: flex;
  gap: 4rem;

  @media only screen and (${breakpoints.burger}){
    position: fixed;
    right: -100%;
    top: 0;

    width: 100%;
    height: 100%;
    background-color: white;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;
