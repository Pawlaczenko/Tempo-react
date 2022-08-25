import React, { useEffect, useState } from 'react'
import {FiCornerDownLeft} from 'react-icons/fi'
import styled from "styled-components";

const LyricsPlaceholder = ({lyrics}) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const lyricsLines = lyrics.split('\n').map((line,i, arr) => {
            return (
            <>
                {line}
                {i !== arr.length-1 && <FiCornerDownLeft />}
                <br />
            </>
            );
        });
        setLines(lyricsLines);
    },[]);
    
    return (
        <StyledLyricsPlaceholder>
            {lines}
        </StyledLyricsPlaceholder>
    )
}

const StyledLyricsPlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  padding: inherit;

  color: var(--color-grey-dark);
  z-index: 1;
`;

export default LyricsPlaceholder