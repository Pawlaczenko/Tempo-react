import React from "react";
import styled from 'styled-components';

function Heading({level,children}) {
  const headingLevels = {"big":"h1", "medium":"h2","small":"h3"};
  return <StyledHeading as={headingLevels[level] || "h1"}>{children}</StyledHeading>
}

const StyledHeading = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 6.5rem;
  font-weight: bold;

  & mark {
    color: var(--color-primary);
    background-color: transparent;
  }
`;

export default Heading;
