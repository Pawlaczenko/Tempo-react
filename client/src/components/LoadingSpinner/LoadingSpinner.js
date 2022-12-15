import React from "react";
import styled from "styled-components";
import {flexCenter} from '../../styles/mixins';

function LoadingSpinner() {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner />
    </StyledSpinnerWrapper>
  );
}

const StyledSpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${flexCenter};
`;

const StyledSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  border: .5rem solid var(--color-primary);
  border-radius: 10%;

  animation: spin 2s ease-in-out infinite;
`;

export default LoadingSpinner;
