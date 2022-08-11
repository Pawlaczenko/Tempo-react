import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";
import {FiFrown} from "react-icons/fi";

function ErrorMessage({message}) {
  return (
    <Wrapper>
      <StyledMessage>{message}</StyledMessage>
      <StyledErrorImage>
        <FiFrown />
      </StyledErrorImage>
    </Wrapper>
  );
}

const Wrapper = styled.figure`
  width: 100%;
  height: 100%;
  ${flexCenter};
  gap: 2rem;
  color: var(--color-warning);
`;

const StyledErrorImage = styled.div`
  & > svg{
    width: 3rem;
    height: 3rem;
  }
`;

const StyledMessage = styled.figcaption`
  font-size: 2.2rem;
  text-align: center;
`;

export default ErrorMessage;
