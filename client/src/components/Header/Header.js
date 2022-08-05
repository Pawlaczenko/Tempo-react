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
      <SideMenu isOpen={isOpen}>
        <Navigation />
        <SearchBar />
      </SideMenu>
      <Burger isOpen={isOpen} handleClick={handleMenuOpen} />
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
  transition: all .3s ease;

  @media only screen and (${breakpoints.burger}){
    position: fixed;
    right: ${props => props.isOpen ? "0" : "100%"};
    top: 0;

    width: 100%;
    height: 100%;
    background-color: white;

    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default Header;
