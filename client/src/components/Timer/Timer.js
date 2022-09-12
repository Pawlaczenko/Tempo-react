import styled from "styled-components";
import useTimer from "../../hooks/useTimer";

function Timer({time}) {

  return <StyledTimer>
          {String(time.minutes).padStart(2,'0')}
          :
          {String(time.seconds).padStart(2,'0')}
        </StyledTimer>
}

export const StyledTimer = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: var(--color-primary);
  font-size: 3rem;
  text-align: right;
`;

export default Timer;
