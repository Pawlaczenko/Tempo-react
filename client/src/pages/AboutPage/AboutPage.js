import React from 'react'
import Heading from '../../components/Heading'
import styled from 'styled-components';
import equation from '../../assets/images/equation.png';
import TopInUsButton from '../../components/Button/TopInUsButton';
import { BREAKPOINTS } from '../../constants';
import Paragraph from '../../components/Paragraph';
import { fadeInAnimation } from '../../styles/mixins';

const AboutPage = () => {
  return (
    <StyledMain>
      <Heading>About <mark>Tempo</mark></Heading>
      <Paragraphs>
          <Paragraph>
            Tempo is a website, where you can test your typing speed using your favorite songs. Just search for a song, artist, or album, choose a song and do the test. Then you'll get the results.
          </Paragraph>
          <Paragraph>
            Type the lyrics as fast as you can. Five keystrokes are counted as equivalent to one word. One error is one misspelled character. Your final wpm(words per minute) score is calculated by the following equation:
          </Paragraph>
          <StyledEqation>
          <img src={equation} alt="WPM= (no. of Words - no. of Errors) / Time" />
          </StyledEqation>
          <Paragraph>
          Due to the nature of a typing speed test, you will be unable to perform the test on your mobile device. Try this app on a device with a keyboard.
          </Paragraph>
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

    @media only screen and (${BREAKPOINTS.medium}){
      grid-template-columns: 100%;
      grid-template-areas:
      "heading"
      "paragraphs"
      "cta";

      & > h1 {
        text-align: center;
      }
    }
  & > h1 {
    ${fadeInAnimation()};
  }
`;

const Paragraphs = styled.div`
  grid-area: paragraphs;
  ${fadeInAnimation(.2)};
`;

const CTAs = styled.div`
  grid-area: cta;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${fadeInAnimation(.4)};

  & > p{
    font-size: 3.4rem;
    color: var(--color-primary);
    font-weight: 700;
    margin-bottom: 2rem;
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

    @media only screen and (${BREAKPOINTS.medium}){
      width: 100%;

      & > img {
        width: 100%;
      }
    }
`;

export default AboutPage