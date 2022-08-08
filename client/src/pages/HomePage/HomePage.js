import React from 'react'
import { BlueButton } from '../../components/Button'
import Heading from '../../components/Heading'
import SearchBar from '../../components/SearchBar'
import {flexCenter} from '../../styles/mixins';
import {breakpoints} from '../../constants';

import {FiStar} from "react-icons/fi";
import styled from 'styled-components';

const HomePage = () => {
  return (
    <StyledMain>
      <Heading level="big">Test <mark>your</mark> typing speed<br /> with <mark>your</mark> favourite songs</Heading>
      <CTAs>
        <SearchBar variant="big" placeholder='Search for a song/artist/album'/>
        <span>or</span>
        <BlueButton><FiStar /> Get top songs in US</BlueButton>
      </CTAs>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & > h1 {
    text-align: center;
  }

  & span {
    font-size: 2.3rem;
  }
`;

const CTAs = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (${breakpoints.phone}){
    width: 100%;
  } 
`;

export default HomePage