import React from "react";
import styled from "styled-components";
import Heading from "../Heading"
import SongTile from "./SongTile";

function SongsGrid({query,songs}) {
  return (
    <div>
      <Heading level="3">Results for <mark>{query}</mark>:</Heading>
      <StyledGrid>
        { songs.map(song => <SongTile song={song} key={song.track_id} />) }
      </StyledGrid>
    </div>
  )
}

const StyledGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  
  padding: 0 8rem;
  margin-top: 3rem;
`;

export default SongsGrid;
