import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LyricsPlaceholder from "./LyricsPlaceholder";
import {checkForEnter,replaceWhitespaceCharacters, isNotFunctionKey,calculateProgress, generateUniqueKey} from './LyricsBoard.helper';
import {scrollBehaviour} from '../../constants';

function LyricsBoard({lyrics,handlePercentageChange,fireTest}) {
  const [lettersComponents, setLettersComponents] = useState([]);
  const [lettersArray, setLettersArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cursorRef = useRef(null);
  const lyricsBoardRef = useRef(null);

  const getCurrentLetter = () => replaceWhitespaceCharacters(lettersArray[currentIndex]);
  const validatePressedLetter = (pressedLetter) => pressedLetter === lettersArray[currentIndex];

  useEffect(() => {
    //Split lyrics into array of characters
    if(lyrics && lyrics.length){
      const letters = lyrics.split('');
      setLettersArray(letters);
    }
  },[lyrics]);

  useEffect(() => {
    lyricsBoardRef.current.focus();
  },[]);

  useEffect(() => {
    //Scroll to active letter
    cursorRef.current.scrollIntoView(scrollBehaviour);

    //Update progress
    let progress = calculateProgress(currentIndex,lettersArray.length);
    handlePercentageChange(progress);
  },[currentIndex]);

    const handleKeyStroke = (e) => {
    if(isNotFunctionKey(e.key)){
      fireTest(true);
      const pressedKey = checkForEnter(e.key);
      const isPressedKeyCorrect = validatePressedLetter(pressedKey);
      
      let copy = [...lettersComponents];
      let indexShift = 1;

      if(e.key === "Backspace"){
        if (lettersComponents.length === 0) return;
        indexShift = -1;
        copy.pop();
      } else {
        const key = generateUniqueKey(e.keyCode);
        const letter = getCurrentLetter();
        const letterComponent = <Letter correct={isPressedKeyCorrect} key={key} isSpace={e.key === ' '}>{letter}</Letter>;
        copy.push(letterComponent);
      }

      setLettersComponents(copy);
      setCurrentIndex(currentIndex+indexShift);
    }
  }

  return (
    <LyricsBoardWrapper onKeyDown={handleKeyStroke} tabIndex={0} ref={lyricsBoardRef}>
      <LyricsPlaceholder lyrics={lyrics} />
      {lettersComponents}
      <Cursor ref={cursorRef}>_</Cursor>
    </LyricsBoardWrapper>
  )
}

export const LyricsBoardWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.6rem;
  letter-spacing: 2px;

  background: white;
  padding: 2rem 3rem;
  overflow-y: hidden;

  position: relative;
  flex: 1;
  overflow-wrap: break-word;
`;

const Letter = styled.span`
    --letter-background: ${props => props.correct ? 'var(--color-correct)' : 'var(--color-warning)'};
    ${props => props.isSpace && props.correct && 'color: var(--letter-background)'};
    background-color: var(--letter-background);
    z-index: 2;
    position: relative;
    display: inline-block;
`;

const Cursor = styled.span`
  color: transparent;
  border-bottom: 2px solid black;
  animation: blink 1s ease infinite;
  /* position: absolute; */
`;

export default LyricsBoard;
