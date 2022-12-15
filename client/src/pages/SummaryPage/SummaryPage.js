import React, { useState,useEffect } from 'react'
import {useLocation, Link} from 'react-router-dom';
import Heading from '../../components/Heading';
import SummaryTable, { StyledSummaryWrapper } from '../../components/SummaryTable';
import {BlueButton,PrimaryButton} from '../../components/Button';
import {FiHome,FiRepeat} from 'react-icons/fi';
import {TYPING_ERROR_STATES, BREAKPOINTS} from '../../constants';
import {addLeadingZeros} from '../../helpers';

import {calculateNetWPM,calculateAccuracy, getWordsCount, getErrorsCount} from './SummaryPage.helper';

import styled from 'styled-components';
import { fadeInAnimation } from '../../styles/mixins';

const SummaryPage = () => {
  const location = useLocation();
  const [summaryData, setSummaryData] = useState({});

  useEffect(() => {
    const wpm = calculateNetWPM(location.state.noOfLetters,location.state.time, location.state.errors);
    const accuracy = calculateAccuracy(location.state.noOfLetters,location.state.errors);
    const no_of_words = getWordsCount(location.state.noOfLetters);
    const typingErrors = {
      corrected: getErrorsCount(location.state.errors,TYPING_ERROR_STATES.CORRECT),
      uncorrected: getErrorsCount(location.state.errors,TYPING_ERROR_STATES.UNCORRECT)
    }

    const tableData = {
      typedCharacters: location.state.noOfLetters,
      typedWords: Math.ceil(no_of_words),
      time: `${addLeadingZeros(location.state.time.minutes)}:${addLeadingZeros(location.state.time.seconds)}`,
      accuracy: `${accuracy}%`,
      correctedErrors: typingErrors.corrected,
      uncorrectedErrors: typingErrors.uncorrected,
      wordsPerMinute: wpm
    };
    setSummaryData(tableData);
  }, [location]);

  return (
    <StyledMain>
        <StyledSummaryHeader>
          <Heading level={2}>Summary</Heading>
          <StyledSongInfo>{location.state.artist} - {location.state.track}</StyledSongInfo>
        </StyledSummaryHeader>
        {Object.keys(summaryData).length && <SummaryTable data={summaryData} />}
        <StyledButtonContainer>
          <BlueButton as={Link} to={`/test/${location.state.track_id}`}> <FiRepeat /> Try again</BlueButton>
          <PrimaryButton as={Link} to="/"><FiHome />Home</PrimaryButton>
        </StyledButtonContainer>
    </StyledMain>
  )
}

const StyledSummaryHeader = styled.div``;

const StyledSongInfo = styled.p`
  font-size: 2.2rem;
  font-weight: light;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media only screen and (${BREAKPOINTS.burger}){
     justify-content: center;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: start;
  height: 100%;

  & > ${StyledSummaryHeader} {
    ${fadeInAnimation()};
  }

  & > ${StyledSummaryWrapper} {
    ${fadeInAnimation(0.2)};
  }

  & > ${StyledButtonContainer}{
    ${fadeInAnimation(.4)};
  }

  @media only screen and (${BREAKPOINTS.burger}){
     align-items: stretch;
     justify-content: space-evenly;
     gap: 3rem;
  }
`;

export default SummaryPage