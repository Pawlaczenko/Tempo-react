import React from "react";
import styled from "styled-components";
import  MusixMatchBatch from "../../assets/images/badge_compact.png";
import { BREAKPOINTS } from "../../constants";

function MusixMatchBadge() {
  return (
    <StyledBadgeWrapper href="https://www.musixmatch.com" target="_blank">
      <img src={MusixMatchBatch} alt="Musixmatch badge"/>
    </StyledBadgeWrapper>
  ) 
  
}

export const StyledBadgeWrapper = styled.a`
  display: block;
  width: 25rem;
`;

export default MusixMatchBadge;
