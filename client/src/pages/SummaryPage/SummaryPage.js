import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import Heading from '../../components/Heading';
import SummaryTable from '../../components/SummaryTable';
import {BlueButton,PrimaryButton} from '../../components/Button';
import {FiHome,FiRepeat} from 'react-icons/fi';
import {TYPING_ERROR_STATES} from '../../constants';

import {calculateNetWPM,calculateAccuracy, getWordsCount, getErrorsCount} from './SummaryPage.helper';

import styled from 'styled-components';

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
      typedWords: no_of_words,
      time: location.state.time,
      accuracy: accuracy,
      errors: typingErrors,
      wpm: wpm
    };
    setSummaryData(tableData);
  }, [location]);

  return (
    <StyledMain>
        <Heading level={2}>Summary</Heading>
        <StyledSongInfo>{location.state.artist} - {location.state.track}</StyledSongInfo>
        {Object.keys(summaryData).length && <SummaryTable data={summaryData} />}
        <StyledButtonContainer>
          <BlueButton> <FiRepeat /> Try again</BlueButton>
          <PrimaryButton><FiHome />Home</PrimaryButton>
        </StyledButtonContainer>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
`;

const StyledSongInfo = styled.p`
  font-size: 2.2rem;
  font-weight: light;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SummaryPage