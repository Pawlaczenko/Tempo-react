import styled from "styled-components";
import React from "react";

function Timer({time}) {
    if (time === undefined) {
        return <StyledTimer data-testid="timer">00:00</StyledTimer>;
    }
    return(
        <StyledTimer data-testid="timer">
          {String(time.minutes).padStart(2,'0')}
          :
          {String(time.seconds).padStart(2,'0')}
        </StyledTimer>
    ) 
}

export const StyledTimer = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: var(--color-primary);
  font-size: 3rem;
  text-align: right;
`;

export default Timer;
