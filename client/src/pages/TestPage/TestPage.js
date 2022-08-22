import React, { useEffect, useState } from 'react'
import {flexCenter} from '../../styles/mixins';
import {breakpoints} from '../../constants';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Timer from '../../components/Timer';
import LyricsBoard, {LyricsBoardWrapper} from '../../components/LyricsBoard';

const TestPage = () => {
  const {track_id} = useParams();
  const url = `/api/getLyrics/${track_id}`;

  // const [song,isPending, error] = [{track_name: "I Like You feat Doja Cat",artist_name: "Post Malone"},false,null];
  const {data:song,isPending, error} = useFetch({url});

  const [progress, setProgress] = useState(0);

  return (
    <StyledMain>
      {error && <ErrorMessage message={error} />}
      {isPending && <LoadingSpinner />}
      {song && !isPending &&
        <>
          <StyledTestHeader>
            <StyledHeaderTitle>{song.track_name} - {song.artist_name}</StyledHeaderTitle>
            <Timer />
          </StyledTestHeader>
          <ProgressBar progress={progress} />
          <LyricsBoard lyrics={song.lyrics} handlePercentageChange={setProgress} />
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

const StyledTestHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderTitle = styled.p`
  font-weight: 300;
  font-size: 2.1rem;
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