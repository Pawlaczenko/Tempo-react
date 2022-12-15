import React from "react";
import styled from "styled-components";
import {BREAKPOINTS} from '../../constants';

function Paragraph({children}) {
  return <StyledParagraph>{children}</StyledParagraph>
}

export const StyledParagraph = styled.p`
  font-size: 2.2rem;
  position: relative;
  margin: 2rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -2rem;
    top: 0;

    width: 3px;
    height: 100%;
    background-color: var(--color-primary);
  }

  @media only screen and (${BREAKPOINTS.medium}){
      margin: 2rem 0;
    }
`;

export default Paragraph;
