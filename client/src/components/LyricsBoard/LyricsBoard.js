import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {validatePressedLetter,setLetter, ignoreKeyPress,calculateProgress} from './LyricsBoard.helper';
import LyricsPlaceholder from "./LyricsPlaceholder";

function LyricsBoard({lyrics,handlePercentageChange,fireTest}) {
  const [lettersComponents, setLettersComponents] = useState([]);
  const [lettersArray, setLetterArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const lettersRef = useRef(lettersArray);
  const setLettersRefArray = (letters) => {
    lettersRef.current = [...letters];
    setLetterArray([...letters]);
  }

  const lettersComponentsRef = useRef(lettersComponents);
  const setLettersComponentsRefArray = (letters) => {
    lettersComponentsRef.current = [...letters];
    setLettersComponents([...letters]);
  }

  const currentIndexRef = useRef(currentIndex);
  const setCurrentIndexRef = (index) => {
    currentIndexRef.current = index;
    setCurrentIndex(index);
  }

  const activeLetterRef = useRef(null);

  useEffect(() => {
    if(lyrics && lyrics.length){
      const letters = lyrics.split('');
      setLettersRefArray(letters);
    }
  },[lyrics]);

  const handleKeyStroke = (e) => {
    if(ignoreKeyPress(e.key)){
      fireTest(true);
      const pressedKey = validatePressedLetter(e.key);
      const isPressedKeyCorrect = (pressedKey === lettersRef.current[currentIndexRef.current]);
      
      let copy = [...lettersComponentsRef.current];
      let indexShift = 1;

      if(e.key === "Backspace"){
        if (lettersComponentsRef.current.length === 0) return;
        indexShift = -1;
        copy.pop();
      } else {
        const key = `${e.keyCode}-${new Date().getTime()}`;
        const letter = setLetter(lettersRef.current[currentIndexRef.current]);
        const letterComponent = <Letter correct={isPressedKeyCorrect} key={key} isSpace={e.key === ' '}>{letter}</Letter>;
        copy.push(letterComponent);
      }

      setLettersComponentsRefArray(copy);
      setCurrentIndexRef(currentIndexRef.current+indexShift);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown",handleKeyStroke);
    return () => {
      document.removeEventListener("keydown",handleKeyStroke);
    }
  },[]);

  useEffect(() => {
    //Scroll to active letter
    if(lettersComponents.length > 0)
      activeLetterRef.current.scrollIntoView({
        behavior: 'smooth',
        block: "center",
        inline: "nearest"
    });

    //Update progress
    let progress = calculateProgress(currentIndex,lettersArray.length);
    handlePercentageChange(progress);
  },[lettersComponents]);

  return (
    <LyricsBoardWrapper>
      <LyricsPlaceholder lyrics={lyrics} />
      {lettersComponents}
      <Cursor ref={activeLetterRef}>_</Cursor>
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
