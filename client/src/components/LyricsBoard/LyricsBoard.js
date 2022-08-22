import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {FiCornerDownLeft} from 'react-icons/fi'
import {validatePressedLetter,setLetter, ignoreKeyPress} from './LyricsBoard.helper';

function LyricsBoard({lyrics,handlePercentageChange}) {
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
    if(lyrics){
      const letters = lyrics.split('');
      setLettersRefArray(letters);
    }
  },[lyrics]);

  const handleKeyStroke = (e) => {
    // console.log(e);
    if(ignoreKeyPress(e.key)){
      const pressedKey = validatePressedLetter(e.key);
      const isPressedKeyCorrect = pressedKey === lettersRef.current[currentIndexRef.current];
      
      let copy = [...lettersComponentsRef.current];
      let indexShift = 1;

      if(e.key === "Backspace"){
        if (lettersComponentsRef.current.length === 0) return;
        copy.pop();
        indexShift = -1;
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
    if(lettersComponents.length > 0 && activeLetterRef.current)
      activeLetterRef.current.scrollIntoView({
        behavior: 'smooth',
        block: "center",
        inline: "nearest"
      });
  },[lettersComponents]);

  return (
    <LyricsBoardWrapper>
      <LyricsPlaceholder>
        {lyrics.split('\n').map(line=><>{line}<FiCornerDownLeft /><br /></>)}
      </LyricsPlaceholder>
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

const LyricsPlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  padding: inherit;

  color: var(--color-grey-dark);
  z-index: 1;
  opacity: .7;
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
