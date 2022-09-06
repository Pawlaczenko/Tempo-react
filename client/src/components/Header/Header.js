import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBar from "../SearchBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { BREAKPOINTS } from '../../constants';
import Burger from "./Burger";

import {useLocation} from "react-router-dom";

function Header() {
  const [isOpen, toggleOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    toggleOpen(false);
  }, [location]);

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

  @media only screen and (${BREAKPOINTS.burger}){
    position: absolute;
    z-index: 100;
    left: ${props => props.isOpen ? "0" : "100%"};
    top: 0;

    width: 100%;
    height: 100%;
    padding: 4rem;
    background-color: white;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;
