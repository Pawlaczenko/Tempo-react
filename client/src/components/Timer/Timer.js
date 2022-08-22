import React from "react";
import styled from "styled-components";

function Timer() {
  return <Wrapper>00:12</Wrapper>
}

const Wrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: var(--color-primary);
  font-size: 2.5rem;
`;

export default Timer;
