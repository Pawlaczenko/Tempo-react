import React from "react";
import styled from "styled-components";
import SongTile from "./SongTile";
import {BREAKPOINTS} from '../../constants';
import { fadeInAnimation } from "../../styles/mixins";

function SongsGrid({query,songs}) {
  return (
    <div>
      <StyledGrid>
        { songs.map((song,index) => <SongTile song={song} key={song.track_id} animationDelay={(index/10)+0.1} />) }
      </StyledGrid>
    </div>
  )
}

const StyledGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  
  padding: 0 8rem;
  margin-top: 3rem;
  /* ${fadeInAnimation()}; */

  @media only screen and (${BREAKPOINTS.small}){
    padding: 0;
  }

  @media only screen and (${BREAKPOINTS.extra_small}){
    grid-template-columns: 80%;
    justify-content: center;
  }
`;

export default SongsGrid;
