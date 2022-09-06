import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LyricsPlaceholder from "./LyricsPlaceholder";
import {checkForEnter,replaceWhitespaceCharacters, isNotFunctionKey,calculateProgress, generateUniqueKey, generateTypingErrorObject} from './LyricsBoard.helper';
import {SCROLL_BEHAVIOUR, TYPING_ERROR_STATES} from '../../constants';

function LyricsBoard({lyrics,handlePercentageChange,fireTest}) {
  const [lettersComponents, setLettersComponents] = useState([]);
  const [lettersArray, setLettersArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingErrors, setTypingErrors] = useState([]);

  const cursorRef = useRef(null);
  const lyricsBoardRef = useRef(null);

  const getCurrentLetter = () => replaceWhitespaceCharacters(lettersArray[currentIndex]);
  const validatePressedLetter = (pressedLetter) => (pressedLetter === lettersArray[currentIndex] || pressedLetter==='Backspace');
  const handleTypingError = (index, state = TYPING_ERROR_STATES.UNCORRECT) => {
    let copy = [...typingErrors];
    const foundIndex = copy.findIndex(err => err.index === index);

    if(foundIndex >= 0) {
      copy[foundIndex].state = state;
      setTypingErrors(copy);
    } else if (state===TYPING_ERROR_STATES.UNCORRECT) {
      setTypingErrors([...typingErrors,generateTypingErrorObject(index)])
    }
  }

  //Split lyrics into array of characters
  useEffect(() => {
    if(lyrics && lyrics.length){
      const letters = lyrics.split('');
      setLettersArray(letters);
    }
  },[lyrics]);

  //Focus the board on start
  useEffect(() => {
    lyricsBoardRef.current.focus();
  },[]);

  useEffect(() => {
    //Scroll to cursor
    cursorRef.current.scrollIntoView(SCROLL_BEHAVIOUR);

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

      if(!isPressedKeyCorrect) handleTypingError(currentIndex);
      
      if(e.key === "Backspace"){
        if (lettersComponents.length === 0) return;
        handleTypingError(currentIndex - 1, TYPING_ERROR_STATES.CORRECT);
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
  overflow: hidden;

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
`;

const Cursor = styled.span`
  color: transparent;
  border-bottom: 2px solid black;
  animation: blink 1s ease infinite;
`;

export default LyricsBoard;
