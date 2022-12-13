import React, { useState,useEffect } from 'react'
import {ellipsis, fadeInAnimation} from '../../styles/mixins'

import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Timer,{StyledTimer} from '../../components/Timer';
import LyricsBoard, { LyricsBoardWrapper } from '../../components/LyricsBoard';
import { BREAKPOINTS } from '../../constants';
import useTimer from '../../hooks/useTimer';

const TestPage = () => {
  const {track_id} = useParams();
  const url = `/api/getLyrics/${track_id}`;

  const {data:song,isPending, error} = useFetch({url});
  const [progress, setProgress] = useState(0);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [minutes,seconds] = useTimer(isTestRunning);
  const navigate = useNavigate();

  const handlePercentageChange = (percentage) => setProgress(percentage);
  const endTest = (data) => {
    setIsTestRunning(false);
    const summaryData = {...data, time: {minutes,seconds}, artist:song.artist_name, track: song.track_name,track_id: song.track_id };
    navigate('/summary',{state:{...summaryData}})
  }
  const fireTest = React.useCallback((shouldFire) => {setIsTestRunning(shouldFire)},[]);

  const headerText = `${song.track_name} - ${song.artist_name}`;

  return (
    <StyledMain>
      {error && <ErrorMessage message={error} />}
      {isPending && <LoadingSpinner />}
      {song && !isPending && !error &&
        <>
          <StyledTestHeader>
            <StyledHeaderTitle title={headerText}>{headerText}</StyledHeaderTitle>
            {!isTestRunning && <StyledMessage>Start Typing</StyledMessage>}
            <Timer time={{minutes, seconds}} />
          </StyledTestHeader>
          <LyricsBoard lyrics={song.lyrics} handlePercentageChange={handlePercentageChange} fireTest={fireTest} endTest={endTest} />
          <ProgressBar style={{"--progress-value": `${progress}%`}} />
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

  @media only screen and (${BREAKPOINTS.small}){
      padding: 0 .5rem;
  }
`;

const StyledHeaderTitle = styled.p`
  font-weight: 300;
  font-size: 2.1rem;
  ${ellipsis()};
`;

const StyledMessage = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-primary);
  text-align: center;

  animation: blink 1.5s ease-in-out infinite;

  @media only screen and (${BREAKPOINTS.small}){
      font-size: 1.5rem;
  }
`;

const StyledTestHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledHeaderTitle} {
    flex:2;
    ${fadeInAnimation()};
  };
  ${StyledMessage} {flex:1.5;}
  ${StyledTimer} {
    flex: 2;
    ${fadeInAnimation(.2)};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--color-grey-lightest);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: var(--progress-value);

    background-color: var(--color-primary);
    transition: width .1s ease-in-out;
  }
`;

export default TestPage