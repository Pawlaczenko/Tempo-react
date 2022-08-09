import React from "react";
import styled from 'styled-components';

function Heading({level=1,children}) {
  const hedingLevel = `h${level}`;
  return <StyledHeading className={hedingLevel} as={hedingLevel}>{children}</StyledHeading>
}

const StyledHeading = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;

  & mark {
    color: var(--color-primary);
    background-color: transparent;
  }

  &.h1{
    font-size: clamp(4rem, 5vw ,6.5rem);
    font-weight: 700;
  }

  &.h2{

  }

  &.h3{
    font-family: 'Montserrat', sans-serif;
    font-size: 2.2rem;
    font-weight: 400;
    & mark {
      text-decoration: underline;
      font-weight: 700;
    }
  }
`;

export default Heading;
