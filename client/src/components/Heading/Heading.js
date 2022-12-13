import React from "react";
import styled from 'styled-components';
import {BREAKPOINTS} from '../../constants';

function Heading({level=1,children}) {
  const hedingLevel = `h${level}`;
  return <StyledHeading className={hedingLevel} as={hedingLevel}>{children}</StyledHeading>
}

const StyledHeading = styled.h1`  
  & mark {
    color: var(--color-primary);
    background-color: transparent;
  }

  &.h1{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: clamp(4rem, 5vw ,6.5rem);
    font-weight: 700;
  }

  &.h2{
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  &.h3{
    font-size: 2.2rem;
    font-weight: 400;
    & mark {
      text-decoration: underline;
      font-weight: 700;
    }

    @media only screen and (${BREAKPOINTS.extra_small}){
        font-size: 2rem;
    }
  }
`;

export default Heading;
