import React from 'react'
import TopInUsButton from '../../components/Button/TopInUsButton'
import Heading from '../../components/Heading'
import SearchBar from '../../components/SearchBar'
import {flexCenter, fadeInAnimation} from '../../styles/mixins';
import {BREAKPOINTS} from '../../constants';

import styled from 'styled-components';
import MusixMatchBadge,{StyledBadgeWrapper} from '../../components/MusixMatchBadge/MusixMatchBadge';

const HomePage = () => {
  return (
    <StyledMain>
      <Heading level="1">Test <mark>your</mark> typing speed<br /> with <mark>your</mark> favourite songs</Heading>
      <CTAs>
        <SearchBar variant="big" placeholder='Search for a song/artist/album'/>
        <span>or</span>
        <TopInUsButton />
      </CTAs>
      <MusixMatchBadge />
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
    ${fadeInAnimation()};
  }

  & span {
    font-size: 2.3rem;
  }

  & > ${StyledBadgeWrapper} {
    ${fadeInAnimation(.4)};
  }
`;

const CTAs = styled.div`
  ${flexCenter};
  ${fadeInAnimation(0.2)};
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (${BREAKPOINTS.phone}){
    width: 100%;
  } 
`;

export default HomePage