import React from 'react'
import Heading from '../../components/Heading'
import styled from 'styled-components';
import equation from '../../assets/images/equation.png';
import TopInUsButton from '../../components/Button/TopInUsButton';
import { breakpoints } from '../../constants';

const AboutPage = () => {
  return (
    <StyledMain>
      <Heading>About <mark>Tempo</mark></Heading>
      <Paragraphs>
          <StyledParagraph>
            Tempo is a website, where you can test your typing speed using your favorite songs. Just search for a song, artist, or album, choose a song and do the test. Then you'll get the results.
          </StyledParagraph>
          <StyledParagraph>
            Type the lyrics as fast as you can. Five keystrokes are counted as equivalent to one word. One error is one misspelled character. Your final wpm(words per minute) score is calculated by the following equation:
          </StyledParagraph>
          <StyledEqation>
          <img src={equation} alt="WPM= (no. of Words - no. of Errors) / Time" />
          </StyledEqation>
          <StyledParagraph>
          Due to the nature of a typing speed test, you will be unable to perform the test on your mobile device. Try this app on a device with a keyboard.
          </StyledParagraph>
      </Paragraphs>
      <CTAs>
        <p>Start right now:</p>
        <TopInUsButton />
      </CTAs>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-areas:
    "heading cta"
    "paragraphs cta";

    @media only screen and (${breakpoints.medium}){
      grid-template-columns: 100%;
      grid-template-areas:
      "heading"
      "paragraphs"
      "cta";

      & > h1 {
        text-align: center;
      }
    }
`;

const Paragraphs = styled.div`
  grid-area: paragraphs;
`;

const CTAs = styled.div`
  grid-area: cta;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > p{
    font-size: 3.4rem;
    color: var(--color-primary);
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 2.2rem;
  position: relative;
  margin: 2rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -2rem;
    top: 0;

    width: 3px;
    height: 100%;
    background-color: var(--color-primary);
  }

  @media only screen and (${breakpoints.medium}){
      margin: 2rem 0;
    }
`;

const StyledEqation = styled.figure`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 80%;
    }

    @media only screen and (${breakpoints.medium}){
      width: 100%;

      & > img {
        width: 100%;
      }
    }
`;

export default AboutPage