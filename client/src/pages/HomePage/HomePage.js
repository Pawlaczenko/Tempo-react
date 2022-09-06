import React from 'react'
import TopInUsButton from '../../components/Button/TopInUsButton'
import Heading from '../../components/Heading'
import SearchBar from '../../components/SearchBar'
import {flexCenter} from '../../styles/mixins';
import {BREAKPOINTS} from '../../constants';

import styled from 'styled-components';

const HomePage = () => {
  return (
    <StyledMain>
      <Heading level="1">Test <mark>your</mark> typing speed<br /> with <mark>your</mark> favourite songs</Heading>
      <CTAs>
        <SearchBar variant="big" placeholder='Search for a song/artist/album'/>
        <span>or</span>
        <TopInUsButton />
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

  @media only screen and (${BREAKPOINTS.phone}){
    width: 100%;
  } 
`;

export default HomePage