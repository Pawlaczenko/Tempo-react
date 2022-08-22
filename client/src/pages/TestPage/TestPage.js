import React, { useEffect, useState } from 'react'
import {ellipsis} from '../../styles/mixins'

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Timer,{StyledTimer} from '../../components/Timer';
import LyricsBoard from '../../components/LyricsBoard';

const TestPage = () => {
  const {track_id} = useParams();
  const url = `/api/getLyrics/${track_id}`;

  const {data:song,isPending, error} = useFetch({url});
  const [progress, setProgress] = useState(0);
  const [isTestRunning, setIsTestRunning] = useState(false);

  const handlePercentageChange = (percentage) => setProgress(percentage);
  const fireTest = () => {if(!isTestRunning) setIsTestRunning(true)};

  const headerText = `${song.track_name} - ${song.artist_name}`;

  return (
    <StyledMain>
      {error && <ErrorMessage message={error} />}
      {isPending && <LoadingSpinner />}
      {song && !isPending &&
        <>
          <StyledTestHeader>
            <StyledHeaderTitle title={headerText}>{headerText}</StyledHeaderTitle>
            {!isTestRunning && <StyledMessage>Start Typing</StyledMessage>}
            <Timer isRunning={isTestRunning} />
          </StyledTestHeader>
          <ProgressBar progress={progress} />
          <LyricsBoard lyrics={song.lyrics} handlePercentageChange={handlePercentageChange} fireTest={fireTest} />
          <ProgressBar progress={progress} />
        </> 
      }
    </StyledMain>
  )
}

const StyledMain = styled.main`
  height: 100%;
  padding: 0 5rem;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
`;

const StyledHeaderTitle = styled.p`
  font-weight: 300;
  font-size: 2.1rem;
  ${ellipsis};
`;

const StyledMessage = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-primary);
  text-align: center;

  animation: blink 1.5s ease-in-out infinite;
`;

const StyledTestHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledHeaderTitle} {flex:2;}
  ${StyledMessage} { flex:1.5;}
  ${StyledTimer} {flex: 2;}
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  position: relative;
  background-color: var(--color-grey-lightest);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.progress || 0}%;

    background-color: var(--color-primary);
    transition: width .1s ease-in-out;
  }
`;

export default TestPage